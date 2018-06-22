import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.sass']
})
export class SubscriptionsComponent implements OnInit {
  
  @Input() users;
  constructor() { }

  ngOnInit() {
  }

}
