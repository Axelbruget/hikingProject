import { TimerService } from '../services/timer.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

let service: TimerService;

describe('TimerService', () => {

    beforeEach(() => TestBed.configureTestingModule({ 
            providers: [TimerService],
            imports: [HttpClientTestingModule]
    }).compileComponents());

    it('Le timer s\'arrête bien sur le stopTimer()', () => {
        service = TestBed.get(TimerService);
        service.stopTimer();
        expect(service.getCounter()).toBe(0);
    });

});
