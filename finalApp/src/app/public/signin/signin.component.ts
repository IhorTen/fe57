import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../-services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass'],
  providers: [UserService]
})
export class SigninComponent implements OnInit {
  
  user = new User('', '', '', '', '');
  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
  }

  signin(){
    // console.log(this.user);
    this.us.signin(this.user)
      .subscribe(res => {
        console.log(res);
      })
  }

}
