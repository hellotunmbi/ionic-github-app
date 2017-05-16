import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import { Observable } from 'rxjs/Rx';

import { User } from '../../models/user';


@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {}

  //load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
    .map(res => <User[]>res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  // param: github user's username
  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
          .map(res => <User>(res.json()))
          
  }

  // Search for github users
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`)
    .map(res => <User[]>(res.json().items))
  }



}
