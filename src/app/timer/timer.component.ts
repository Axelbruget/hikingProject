import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { HikingManagerService } from '../services/hiking-manager.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(
    private timerService: TimerService,
    private hikingManagerService: HikingManagerService) { }

  ngOnInit() {
    this.timerService.hours.subscribe(h => this.hours = h);
    this.timerService.minutes.subscribe(m => this.minutes = m);
    this.timerService.seconds.subscribe(s => this.seconds = s);
  }

  getCurrentHiking() {
    return this.hikingManagerService.getCurrentHiking();
  }

  stopHiking() {
    return this.hikingManagerService.stopHiking();
  }

  isCurrentHiking() {
    return this.hikingManagerService.isCurrentHiking();
  }

}
