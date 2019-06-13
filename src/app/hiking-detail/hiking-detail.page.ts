import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Hiking } from '../models/hiking';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';
import { Step } from '../models/step';

@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.page.html',
  styleUrls: ['./hiking-detail.page.scss'],
})
export class HikingDetailPage implements OnInit {
  private hiking$: Observable<Hiking>;
  private currentUser: User;
  private steps$ : Observable<Step>;

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
    
    this.hiking$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getHiking(params.get('id')))
    );
    this.steps$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getStepsForHiking(params.get('id'))),
      tap(console.log)
    );
    
    setTimeout(() => {this.initMap()}, 1000);
  }

  initMap(){
    const mymap = L.map('mapid').setView([45.77, 3.08], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // for (let step in this.hiking$.steps)
  }
}

