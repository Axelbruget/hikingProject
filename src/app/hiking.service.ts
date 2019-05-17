import { Injectable } from '@angular/core';
import { Hiking } from './hiking';
import { Observable, of } from 'rxjs';
import { HIKINGS } from './mock-hikings';

@Injectable({
  providedIn: 'root'
})
export class HikingService {

  constructor() { }

  getHikings(): Observable<Hiking[]> {
    return of(HIKINGS);
  }
}
