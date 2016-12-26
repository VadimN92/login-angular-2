import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

import { AuthGuard } from './auth-guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { routing } from './routing';
import {AuthService} from "./auth.service";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
