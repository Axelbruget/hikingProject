import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from '../services/data-fetcher.service';
import { LoginService } from '../services/login.service';
import { Hiking } from '../models/hiking';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private hikings: Hiking[];
  private currentHiking: Hiking;
  private currentUser: User;

  constructor(
    private dataFetcherService: DataFetcherService,
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loginService.checkCurrentUser().subscribe((user: User) => this.currentUser = user);
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    }
    this.dataFetcherService.getHikings().subscribe(data => this.hikings = data);

    if (localStorage.getItem('hiking_currenthiking')) {
      this.currentHiking = JSON.parse(localStorage.getItem('hiking_currenthiking'));
    }

  }


}
