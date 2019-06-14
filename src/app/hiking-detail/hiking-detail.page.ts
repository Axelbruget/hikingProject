import { Component, OnInit } from '@angular/core';
import { switchMap, tap, flatMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Hiking } from '../models/hiking';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.page.html',
  styleUrls: ['./hiking-detail.page.scss'],
})
export class HikingDetailPage implements OnInit {
  private hiking: Hiking;
  private currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginService,
    private dataFetcherService : DataFetcherService
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

  initMap(){
    // @ts-ignore
    const mymap = L.map('mapid').setView([45.77, 3.08], 13);
    // @ts-ignore
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    const steps = this.hiking.steps.map(step => [step.xposition, step.yposition])

    // @ts-ignore
    L.Routing.control({
      waypoints: steps,
      show: false
    }).addTo(mymap);
  }
}

