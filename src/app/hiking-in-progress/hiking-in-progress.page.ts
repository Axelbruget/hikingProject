import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiking } from '../models/hiking';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, flatMap, map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-hiking-in-progress',
  templateUrl: './hiking-in-progress.page.html',
  styleUrls: ['./hiking-in-progress.page.scss'],
})
export class HikingInProgressPage implements OnInit {
  private hiking: Hiking;
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
    
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getHiking(params.get('id'))
      ),
      flatMap(value => value)
    ).subscribe((hiking : Hiking) => this.hiking = hiking);
    
    setTimeout(() => {this.initMap()}, 1000);
  }

  stopHiking(){
    localStorage.removeItem("hiking_currenthiking");
    this.router.navigate(["/list"]);
  }

  initMap(){
    // @ts-ignore
    const mymap = L.map('progressmap').setView([45.77, 3.08], 13);
    // @ts-ignore
    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 19
    });
    mymap.addLayer(osmLayer);

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
