import { Injectable } from '@angular/core';
import { Hiking } from '../models/hiking';
import { TimerService } from './timer.service';

@Injectable({
    providedIn: 'root'
})
export class HikingManagerService {
    router: any;

    constructor(private timerService: TimerService) { }

    startHiking(hiking: Hiking) {
        this.stopHiking();
        localStorage.setItem('hiking_currenthiking', JSON.stringify(hiking));
        this.timerService.runTimer();
    }

    isCurrentHiking() {
        if (this.getCurrentHiking() !== null) {
            return true;
        } else {
            return false;
        }
    }

    getCurrentHiking() {
        const currentHiking: Hiking = JSON.parse(localStorage.getItem('hiking_currenthiking'));
        return currentHiking;
    }

    stopHiking() {
        localStorage.removeItem('hiking_currenthiking');
        this.timerService.stopTimer();
        // this.router.navigate(['/list']);
    }
}
