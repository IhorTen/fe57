import { Component, OnInit } from '@angular/core';
import { UserService } from '../../-services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  
  users;
  currentUser;
  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.us.getCurrent()
      .subscribe( user => {
        // console.log(user);
        this.currentUser = user;
      } )
  }

  getUsers(){
    this.us.getUsers()
      .subscribe(res => {
        // console.log(res);
        this.users = res;
      })
  }

}
