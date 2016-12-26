import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    let status = true;
    console.log('canActivate ' + status);
    return status;
  }
}
