import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'App1';
  users = [
    {
      name: 'Bob',
      age: 45
    },
    {
      name: 'Ivan',
      age: 35
    },
    {
      name: 'Ivan',
      age: 38
    },
    {
      name: 'Ivan',
      age: 34
    },
    {
      name: 'Ivan',
      age: 31
    }
  ]

  removeUser(i){
    this.users.splice(i, 1);
  }

  x = false;

}