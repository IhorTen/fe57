import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = 'TEST';
  users = [
    {
      name: 'Bob',
      age: 45
    },
    {
      name: 'Ivan',
      age: 26
    },
    {
      name: 'Kate',
      age: 20
    }
  ]
  x = true;

  removeUser(i){
    this.users.splice(i, 1);
  }
}
