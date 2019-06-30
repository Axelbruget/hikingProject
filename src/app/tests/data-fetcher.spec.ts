import { DataFetcherService } from '../services/data-fetcher.service';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Hiking } from '../models/hiking';
import { Observable } from 'rxjs';

let service: DataFetcherService;

describe('DataFetcherService', () => {

    beforeEach(() => TestBed.configureTestingModule({
            providers: [DataFetcherService],
            imports: [HttpClientTestingModule]
    }).compileComponents());

    it('La récupération de la liste des randonnées ne doit pas être une valeur non défini', () => {
        service = TestBed.get(DataFetcherService);
        expect(service.getHikings()).toBeDefined();
    });

    it('Récupération de la première randonnée qui doit être de type Observable<Hiking>', () => {
        service = TestBed.get(DataFetcherService);
        service.getHiking(1).subscribe((hiking: Observable<Hiking>) => {
            expect(typeof hiking).toEqual('object');
        });
    });

    it('La récupération de la liste des randonnées doit bien renvoyer une liste', () => {
        service = TestBed.get(DataFetcherService);
        service.getHikings().subscribe((hiking: Hiking[]) => {
            expect(typeof hiking).toEqual('object');
        });
    });
});
