import { Component, OnInit } from '@angular/core';
import { switchMap, tap, flatMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Hiking } from '../models/hiking';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';
import { HikingManagerService } from '../services/hiking-manager.service';

@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.page.html',
  styleUrls: ['./hiking-detail.page.scss'],
})
export class HikingDetailPage implements OnInit {
  private hiking: Hiking;
  private currentHiking: Hiking;
  private currentUser: User;
  private currentLatitude: number;
  private currentLongitude: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private dataFetcherService: DataFetcherService,
    private hikingManagerService: HikingManagerService
  ) {}

  ngOnInit() {
    this.loginService.checkCurrentUser().subscribe((user: User) => this.currentUser = user);
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }

    if (localStorage.getItem('hiking_currenthiking')) {
      this.currentHiking = JSON.parse(localStorage.getItem('hiking_currenthiking'));
    }

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getHiking(params.get('id'))
      ),
      flatMap(value => value)
    ).subscribe((hiking: Hiking) => this.hiking = hiking);
  }

  startHiking(hiking: Hiking) {
    this.hikingManagerService.startHiking(hiking);
  }

  stopHiking() {
    this.hikingManagerService.stopHiking();
  }
}

