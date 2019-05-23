import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hiking } from '../hiking';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HikingService } from '../hiking.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hiking-in-progress',
  templateUrl: './hiking-in-progress.page.html',
  styleUrls: ['./hiking-in-progress.page.scss'],
})
export class HikingInProgressPage implements OnInit {
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
