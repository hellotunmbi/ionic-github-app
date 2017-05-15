import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Rx';

import { User } from '../models/user';


@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {  }

  //load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
    .map(res => <User[]>res.json());
  }

}
