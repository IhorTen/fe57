import { Component, OnInit } from '@angular/core';
import {Post} from '../post';
import {PostService} from '../posts/post.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [PostService]
})

// class User {
//   name:string;
//   age:number;
// }

export class ProfileComponent implements OnInit {

  posts:Post[];

  constructor(
    private ps: PostService
  ) {}

  ngOnInit() {
    this.posts = this.ps.getPosts();
  }

  // x:number = 10;
  // x:string = '10';
  // x:boolean = true;
  // x:string[] = ['a', 'a', 'ssdf', '1'];

  // user1:User = {
  //   name: 'Bob',
  //   age: 19
  // }

  // users:User[] = [
  //   {
  //     name: 'Bob',
  //     age: 19
  //   },
  //   {
  //     name: 'Bob',
  //     age: 19
  //   }
  // ]

  // x:any = 10;

  newPost:Post = {
    title: '',
    body: ''
  }

  addPost(){
    // POSTS.push(this.newPost);
    this.ps.addPost(this.newPost);
  }

  removePost(i){
    this.ps.removePost(i);
  }

}
