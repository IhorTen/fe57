import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  
  @Input() post;
  @Input() index;
  @Output() onDeletingPost = new EventEmitter();
  @Output() onLikingPost = new EventEmitter();
  likes;


  constructor() { }

  ngOnInit() {
    if(this.post){
      this.likes = {
        liked: this.post.liked,
        num: this.post.likes
      }
    }
  }

  deletePost(){
    this.onDeletingPost.emit({id: this.post.id, index: this.index})
  }

  like(){
    this.onLikingPost.emit(this.post.id)
  }

}
