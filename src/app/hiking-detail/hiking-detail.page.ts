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
  private currentHiking: Hiking;
  private currentUser: User;
  private currentLatitude: Number;
  private currentLongitude: Number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService : LoginService,
    private dataFetcherService : DataFetcherService,
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
  }

  startHiking(hiking : Hiking){
    this.stopHiking();
    localStorage.setItem("hiking_currenthiking", JSON.stringify(hiking));
  }

  stopHiking(){
    localStorage.removeItem("hiking_currenthiking");
  }
}

