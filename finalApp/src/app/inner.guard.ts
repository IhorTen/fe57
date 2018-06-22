import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './-services/user.service';
@Injectable()
export class InnerGuard implements CanActivate {
  constructor(public auth: UserService, public router: Router) {}
  canActivate(): boolean {
    if (this.auth.isAuthed()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}