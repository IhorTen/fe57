import { Component, OnInit } from '@angular/core';
import { UserService } from '../-services/user.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.sass'],
  providers: [UserService]
})
export class SecureComponent implements OnInit {
  me;
  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.getCurrent();
  }

  logout(){
    this.us.logout();
  }

  getCurrent(){
    this.us.getCurrent()
      .subscribe(res => {
        // console.log(res);
        this.me = res;
      })
  }

}
