import { HikingManagerService } from '../services/hiking-manager.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Hiking } from '../models/hiking';

let service: HikingManagerService;

describe('HikingManagerService', () => {

    beforeEach(() => TestBed.configureTestingModule({
            providers: [HikingManagerService],
            imports: [HttpClientTestingModule]
    }).compileComponents());

    it('startHiking() démarre bien une randonnée', () => {
        service = TestBed.get(HikingManagerService);
        const hiking = new Hiking();
        service.startHiking(hiking);
        expect(service.isCurrentHiking()).toBe(true);
    });

    it('stopHiking() arrête bien la randonnée en cours', () => {
        service = TestBed.get(HikingManagerService);
        const hiking = new Hiking();
        service.startHiking(hiking);
        service.stopHiking();
        expect(service.isCurrentHiking()).toBe(false);
    });

});
