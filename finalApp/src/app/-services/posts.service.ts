import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class PostsService {

  constructor(
    private http: Http
  ) { }

  getPosts(userId?){
    let res;
    if(userId){
      res = this.http.get('http://moneyapp.loc/api/posts?userId=' + userId)
    }else{
      res = this.http.get('http://moneyapp.loc/api/posts')
    }
    return res.map(res => {
      return res.json().posts;
    })
  }

  getPost(id){
    return this.http.get('http://moneyapp.loc/api/posts/' + id)
      .map(res => {
        return res.json().post;
      })
  }

  addPost(post){
    return this.http.post('http://moneyapp.loc/api/posts', post)
      .map(res => {
        return res.json().post;
      })
  }

  updatePost(post){
    return this.http.put('http://moneyapp.loc/api/posts/' + post.id, post)
      .map(res => {
        return res.json().post;
      })
  }

  deletePost(id){
    return this.http.delete('http://moneyapp.loc/api/posts/' + id, {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
      .map(res => {
        return res.json();
      })
  }

  like(userId, postId){
    return this.http.delete('http://moneyapp.loc/api/posts/like/' + postId + '?userId=' + userId, {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
      .map(res => {
        return res.json();
      })
  }

}
