import { Injectable } from '@angular/core';
import { Hiking } from '../models/hiking';
import { Observable, of } from 'rxjs';
import { HIKINGS } from '../mock-hikings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HikingService {

  constructor() { }

  getHikings(): Observable<Hiking[]> {
    return of(HIKINGS);
  }
  getHiking(id: number | string) {
    return this.getHikings().pipe(
      // (+) before `id` turns the string into a number
      map((hikings: Hiking[]) => hikings.find(hiking => hiking.id === +id))
    );
  } 
}
