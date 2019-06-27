import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }
    private url = 'assets/data/user.json';
    private currentUser: User;

    public getUsers(): Observable<User[]> {
        return this.http.get<any[]>(this.url);
    }

    public checkCurrentUser(): Observable<User> {
        this.currentUser = JSON.parse(localStorage.getItem('hiking_currentuser'));
        return of(this.currentUser);
    }
}
