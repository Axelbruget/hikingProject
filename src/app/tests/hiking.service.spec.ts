import { TestBed } from '@angular/core/testing';

import { HikingService } from '../services/hiking.service';

describe('HikingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HikingService = TestBed.get(HikingService);
    expect(service).toBeTruthy();
  });
});