import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../app.config';
import { User } from '../_models/user';
 
@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
 
    getAll() {
        return this.http.get(this.config.apiUrl + '/api/identity', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(_id: string) {
        return this.http.get(this.config.apiUrl + '/api/identity/' + _id, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post(this.config.apiUrl + '/api/identity/register', user, this.jwt());
    }
 
    update(user: User) {

        const headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.put(this.config.apiUrl + '/api/identity/' + user._id, user, this.jwt());
    }
 
    delete(_id: string) {
        return this.http.delete(this.config.apiUrl + '/api/identity/' + _id, this.jwt());
    }
 
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            
            headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
            
            return new RequestOptions({ headers: headers });
        }
    }
}