import { Component, OnInit } from '@angular/core';
import { UserService } from '../-services/user.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.sass'],
  providers: [UserService]
})
export class PublicComponent implements OnInit {
  
  authed;
  constructor(
    private us: UserService
  ) { }

  ngOnInit() {
    this.authed = this.us.isAuthed();
  }

}
