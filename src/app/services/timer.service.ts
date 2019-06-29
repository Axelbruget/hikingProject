import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimerService {
    hours: BehaviorSubject<number>;
    minutes: BehaviorSubject<number>;
    seconds: BehaviorSubject<number>;

    counter: number;
    interval: any;

  constructor() {
    this.counter = localStorage.getItem('hiking_timer') ? parseInt(localStorage.getItem('hiking_timer'), 10) : 0;
    this.hours = new BehaviorSubject(0);
    this.minutes = new BehaviorSubject(0);
    this.seconds = new BehaviorSubject(0);
  }

  public runTimer(): void {
    if (!localStorage.getItem('hiking_timer')) {
      localStorage.setItem('hiking_timer', this.counter.toString());
      this.interval = setInterval(() => {
            this.counter++;
            this.seconds.next(this.counter % 60);
            this.minutes.next(Math.floor(this.counter / 60));
            this.hours.next(Math.floor(this.counter / 3600));
        }, 1000);
    }
  }

  public stopTimer(): void {
    clearInterval(this.interval);
    localStorage.removeItem('hiking_timer');
    this.counter = 0;
    this.seconds.next(0);
    this.minutes.next(0);
    this.hours.next(0);
  }



}
