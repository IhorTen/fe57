import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../-services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  
  user = new User('', '', '', '', '');
  errors;
  
  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
  }

  signup(){
    console.log(this.user);
    this.us.signup(this.user)
      .subscribe(res => {
        console.log(res);
      }, error => {
        this.errors = error.json();
        console.log(error.json());
      })
  }

}
