import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hiking } from '../models/hiking';

@Injectable({
    providedIn: 'root'
})
export class DataFetcherService {

    constructor(private http: HttpClient) { }
    private url : string = 'assets/data/data.json';

    public getHikings() : Observable<any[]>{
        return this.http.get<Hiking[]>(this.url);   
    }

    public getHiking(id: number | string){
        return this.getHikings().pipe(
            map((hikings: Hiking[]) => hikings.find(hiking => hiking.id === +id))
        );
    }
}