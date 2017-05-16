import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../models/user';
import { UserDetailsPage } from '../user-details/UserDetailsPage';

import { GithubUsers } from '../../providers/github-users/github-users';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
        this.users = users;
        this.originalUsers = users;

    })
  }
    

    goToDetails(login: string) {
      this.navCtrl.push(UserDetailsPage, {login});
    }


    search(searchEvent) {
        let term = searchEvent.target.value;

        //perform search if search item is 3 or more
        if(term.trim() == '' || term.trim().length < 3) {
          //load cached users
          this.users = this.originalUsers;
        } else {
          // get searched users
          this.githubUsers.searchUsers(term).subscribe(users => {
            this.users = users
          });
        }

      }



  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
}