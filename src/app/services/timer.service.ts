import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TimerService {
    h: BehaviorSubject<number>;
    min: BehaviorSubject<number>;
    sec: BehaviorSubject<number>;

    counter: number;
    interval: any;

  constructor() {
    if (localStorage.getItem('hiking_timer')) {
      this.counter = parseInt(localStorage.getItem('hiking_timer'), 10);
    } else {
      this.resetCounter();
    }
    this.counter = localStorage.getItem('hiking_timer') ? parseInt(localStorage.getItem('hiking_timer'), 10) : 0;
    this.h = new BehaviorSubject(0);
    this.min = new BehaviorSubject(0);
    this.sec = new BehaviorSubject(0);
  }

  public startTimer() {
    if (!localStorage.getItem('hiking_timer')) {
      localStorage.setItem('hiking_timer', this.counter.toString());
      this.startInterval();
    }
  }

  public stopTimer() {
    clearInterval(this.interval);
    localStorage.removeItem('hiking_timer');
    this.resetCounter();
    this.resetTime();
  }

  public resetCounter() {
    this.counter = 0;
  }

  public startInterval() {
    this.interval = setInterval(() => {
      this.counter++;
      this.h.next(Math.floor(this.counter / 3600));
      this.min.next(Math.floor(this.counter / 60));
      this.sec.next(this.counter % 60);
    }, 1000);
  }

  public resetTime() {
    this.h.next(0);
    this.min.next(0);
    this.sec.next(0);
  }

  public getCounter() {
    return this.counter;
  }
}
