import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SubscribeService {

  constructor(
    private http: Http
  ) { }

  follow(from, to){
    return this.http.get(`http://moneyapp.loc/api/subscribe?fromUser=${from}&toUser=${to}`)
      .map(res => {
        return res.json();
      })
  }

  isFollowed(from, to){
    return this.http.get(`http://moneyapp.loc/api/isFollowed?fromUser=${from}&toUser=${to}`)
      .map(res => {
        return res.json();
      })
  }

  getFollowers(id){
    return this.http.get(`http://moneyapp.loc/api/followers/${id}`)
      .map(res => {
        return res.json();
      })
  }

  getFollowings(id){
    return this.http.get(`http://moneyapp.loc/api/followings/${id}`)
      .map(res => {
        return res.json();
      })
  }

}
