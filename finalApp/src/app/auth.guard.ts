import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './-services/user.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthed()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}