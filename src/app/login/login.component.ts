import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';

import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  errorMsg: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    // logout
    this.authService.logout();
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLogin(userForm: User) {
    console.log(userForm);
    if(!this.authService.login(userForm)) {
      this.errorMsg = "Opps, something went wrong";
    }
  }

}
