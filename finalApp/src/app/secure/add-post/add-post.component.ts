import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../post';
import { PostsService } from '../../-services/posts.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass'],
  providers: [PostsService]
})
export class AddPostComponent implements OnInit {
  
  @Input() user;
  @Output() onAddingPost = new EventEmitter();
  post;
  constructor(
    private ps: PostsService
  ) { }

  ngOnInit() {
    this.post = new Post(this.user.id, '', '');
  }

  addPost(){
    this.ps.addPost(this.post)
      .subscribe(newPost => {
        // console.log(newPost);
        this.onAddingPost.emit(newPost);
        this.post.title = '';
        this.post.body = '';
      })
  }

}
