import { DataFetcherService } from "../services/data-fetcher.service";
import { TestBed } from '@angular/core/testing';

let service: DataFetcherService;

describe('DataFetcherService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [DataFetcherService] });
    });

    it('récupération des données depuis hiking.json', () => {
        service = TestBed.get(DataFetcherService);
        expect(service.getHikings()).toBeDefined();
    });
});