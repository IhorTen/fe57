import { Injectable } from '@angular/core';
import {POSTS} from '../POSTS';
import {Post} from '../post';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(){
    return POSTS;
  }

  addPost(newPost:Post){
    POSTS.push(newPost);
  }

  removePost(i){
    POSTS.splice(i, 1);
  }

  editPost(i, newPost:Post){
    POSTS[i] = newPost;
  }

}
