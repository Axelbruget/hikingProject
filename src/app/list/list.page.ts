import { Component, OnInit } from '@angular/core';
import { HikingService } from '../hiking.service';
import { Hiking } from '../hiking';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  hikings$: Observable<Hiking[]>;
  selectedId: number;
  
  constructor(
    private service: HikingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.hikings$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHikings();
      })
    );
  }

}
