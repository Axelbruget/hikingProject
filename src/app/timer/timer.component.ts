import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';
import { HikingManagerService } from '../services/hiking-manager.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  h: number;
  min: number;
  sec: number;

  constructor(
    private timerService: TimerService,
    private hikingManagerService: HikingManagerService) { }

  ngOnInit() {
    this.timerService.h.subscribe(h => this.h = h);
    this.timerService.min.subscribe(m => this.min = m);
    this.timerService.sec.subscribe(s => this.sec = s);
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
