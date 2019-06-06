import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataFetcherService {

    constructor(private http: HttpClient) { }
    private url : string = 'assets/data/data.json';

    public getHikings() : Observable<any[]>{
        return this.http.get<any[]>(this.url);   
    }
}