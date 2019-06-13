import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hiking } from '../models/hiking';
import { Step } from '../models/step';

@Injectable({
    providedIn: 'root'
})
export class DataFetcherService {

    constructor(private http: HttpClient) { }
    private urlHikings : string = 'assets/data/hiking.json';
    private urlSteps : string = 'assets/data/step.json';

    public getHikings() : Observable<Hiking[]>{
        return this.http.get<Hiking[]>(this.urlHikings);   
    }

    public getSteps() : Observable<Step[]>{
        return this.http.get<Step[]>(this.urlSteps);   
    }

    public getHiking(id: number | string){
        return this.getHikings().pipe(
            map((hikings: Hiking[]) => hikings.find(hiking => hiking.id === +id))
        );
    }

    public getStepsForHiking(id : number | string){
        return this.getSteps().pipe(
            map((steps: Step[]) => steps.filter(step => step.hikingId === +id))
        ); 
    }
}