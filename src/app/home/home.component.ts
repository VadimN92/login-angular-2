import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('.1s')),
      transition('hidden => shown', animate('1s'))
    ])
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVisible = true;
  visibility = 'shown';
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.checkCredentials();
  }

  logout() {
    this.authService.logout();
  }

  toggleVisibility() {
    console.log(this.isVisible);
    this.visibility = this.isVisible ? 'shown' : 'hidden';
    this.isVisible = !this.isVisible;
  }

}
