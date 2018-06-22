import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent implements OnInit {

  @Input() likes; //{ liked: boolean, num: number }
  @Output() liking = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  like(){
    if(this.likes.liked){
      this.likes.liked = false;
      this.likes.num -= 1;
    }else{
      this.likes.liked = true;
      this.likes.num += 1;
    }
    this.liking.emit();
  }

}
