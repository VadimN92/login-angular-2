import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

var users =[
  new User('admin@admin.ua', 'admin'),
  new User('user@user.us', 'user')
];

@Injectable()
export class AuthService {



  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);

    if( authenticatedUser && authenticatedUser.password == user.password) {
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      this.router.navigate(['home']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if(localStorage.getItem('user') == null) {
      this.router.navigate(['login']);
    }
  }
}
