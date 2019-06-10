import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiking } from '../models/hiking';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-hiking-in-progress',
  templateUrl: './hiking-in-progress.page.html',
  styleUrls: ['./hiking-in-progress.page.scss'],
})
export class HikingInProgressPage implements OnInit {
    private hiking$: Observable<Hiking>;
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
    
    this.hiking$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataFetcherService.getHiking(params.get('id')))
    );
  }

}
