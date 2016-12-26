import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRouters = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'home',
      component: HomeComponent,
      children: [
        {
          path: '',
          redirectTo: 'test1',
          pathMatch: 'full'
        },
        {
          path: 'test1',
          component: Test1Component
        },
        {
          path: 'test2',
          component: Test2Component,
          canActivate: [AuthGuard]
        }
      ]
    },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const routing = RouterModule.forRoot(appRouters);
