import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Hiking } from '../models/hiking';
import { HikingService } from '../services/hiking.service';

@Component({
  selector: 'app-hiking-detail',
  templateUrl: './hiking-detail.page.html',
  styleUrls: ['./hiking-detail.page.scss'],
})
export class HikingDetailPage implements OnInit {
  hiking$: Observable<Hiking>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HikingService
  ) {}

  ngOnInit() {
    this.hiking$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHiking(params.get('id')))
    );
  }
}
