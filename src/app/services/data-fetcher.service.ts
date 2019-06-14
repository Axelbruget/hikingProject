import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hiking } from '../models/hiking';

@Injectable({
    providedIn: 'root'
})
export class DataFetcherService {

    constructor(private http: HttpClient) { }
    private urlHikings : string = 'assets/data/hiking.json';

    public getHikings() : Observable<Hiking[]>{
        const hikings = this.http.get<Hiking[]>(this.urlHikings);
        return hikings;
    }

    public getHiking(id: number | string){
        const hiking = this.getHikings().pipe(map((hikings: Hiking[]) => hikings.find(hiking => hiking.id === +id)));
        return of(hiking);
    }
}