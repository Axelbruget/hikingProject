import { Component, OnInit } from '@angular/core';
import { switchMap, tap, flatMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Hiking } from '../models/hiking';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.page.html',
  styleUrls: ['./hiking-detail.page.scss'],
})
export class HikingDetailPage implements OnInit {
  private hiking: Hiking;
  private currentHiking: Hiking;
  private currentUser: User;
  private currentLatitude: Number;
  private currentLongitude: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginService,
    private dataFetcherService : DataFetcherService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.loginService.checkCurrentUser().subscribe((user : User) => this.currentUser = user);
    if (!this.currentUser){
      this.router.navigate(["/login"]);
    }
    
    if (localStorage.getItem("hiking_currenthiking")){
      this.currentHiking = JSON.parse(localStorage.getItem("hiking_currenthiking"));
    }
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getHiking(params.get('id'))
      ),
      flatMap(value => value)
    ).subscribe((hiking : Hiking) => this.hiking = hiking);
    
    setTimeout(() => {this.initMap()}, 1000);
  }

  startHiking(hiking : Hiking){
    this.stopHiking();
    localStorage.setItem("hiking_currenthiking", JSON.stringify(hiking));
  }

  stopHiking(){
    localStorage.removeItem("hiking_currenthiking");
  }

  initMap(){
    // @ts-ignore
    const mymap = L.map('mapid').setView([45.77, 3.08], 13);
    // @ts-ignore
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    const steps = this.hiking.steps.map(step => [step.latitude, step.longitude])

    // @ts-ignore
    L.Routing.control({
      waypoints: steps,
      show: false
    }).addTo(mymap);

    this.geolocation.getCurrentPosition().then((resp) => {
      // @ts-ignore
      
      var circle = L.circle([resp.coords.latitude, resp.coords.longitude], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 150
        }).addTo(mymap);
        //console.log(resp.coords.latitude);
      }).catch((error) => {
        console.log('La récupération de la position a échouée', error);
      });
     
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
    });
  }
}

