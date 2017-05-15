import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../models/user';

import { GithubUsers } from '../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      console.log(users);
    });
  }

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
}