import { Component, OnInit } from '@angular/core';
import { HikingService } from '../services/hiking.service';
import { Hiking } from '../models/hiking';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataFetcherService } from '../services/data-fetcher.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public hikings = [];
  
  constructor(
    private service: HikingService,
    private dataFetcherService : DataFetcherService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.hikings$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //     return this.service.getHikings();
    //   })
    // ); 

    this.dataFetcherService.getHikings().subscribe(data => this.hikings = data);
  
  }
  

}
