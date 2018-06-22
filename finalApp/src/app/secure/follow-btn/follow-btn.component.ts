import { Component, OnInit, Input } from '@angular/core';
import { SubscribeService } from '../../-services/subscribe.service';

@Component({
  selector: 'follow-btn',
  templateUrl: './follow-btn.component.html',
  styleUrls: ['./follow-btn.component.sass'],
  providers: [SubscribeService]
})
export class FollowBtnComponent implements OnInit {
  
  @Input() from;
  @Input() to;
  isFollowed;
  constructor(
    private ss: SubscribeService
  ) { }

  ngOnInit() {
    this.ss.isFollowed(this.from, this.to)
      .subscribe(res => {
        this.isFollowed = res.followed;
        // console.log(res);
      })
  }

  follow(){
    this.ss.follow(this.from, this.to)
      .subscribe(res => {
        this.isFollowed = true;
      }, error => {
        console.error(error);
      })
  }


}
