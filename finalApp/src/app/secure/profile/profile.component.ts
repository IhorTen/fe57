import { Component, OnInit } from '@angular/core';
import { UserService } from '../../-services/user.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { PostsService } from '../../-services/posts.service';
import { SubscribeService } from '../../-services/subscribe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  providers: [PostsService, SubscribeService]
})
export class ProfileComponent implements OnInit {
  
  user;
  me;
  editing = false;
  posts;
  followings;
  followers;
  subscriptions = {
    type: '',
    list: ''
  };
  constructor(
    private us: UserService,
    private ps: PostsService,
    private ss: SubscribeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
    this.router.events.forEach( item => {
      if(item instanceof NavigationEnd) {
        this.getUser();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    } )
  }

  getFollowers(){
    this.ss.getFollowers(this.user.id)
      .subscribe(res => {
        // console.log(res);
        this.followers = res.followers;
      })
  }

  getFollowings(){
    this.ss.getFollowings(this.user.id)
      .subscribe(res => {
        // console.log(res);
        this.followings = res.followings;
      })
  }

  openFollowers(){
    this.subscriptions.type = 'followers';
    this.subscriptions.list = this.followers;
  }

  openFollowings(){
    this.subscriptions.type = 'followings';
    this.subscriptions.list = this.followings;
  }

  getUser(){
    let id = this.route.snapshot.paramMap.get('id');
    this.us.getUser(id)
      .subscribe(user => {
        // console.log(user);
        this.user = user;
        this.isMe();
        this.getPosts();
        this.getFollowers();
        this.getFollowings();
      })
  }

  isMe(){
    this.us.getCurrent()
      .subscribe(user => {
        if(user.id === this.user.id){
          this.me = true;
        }else{
          this.me = false;
        }
      })
  }

  toEdit(){
    this.editing = true;
  }

  updateUser(){
    this.us.updateUser(this.user)
      .subscribe(newUser => {
        // this.user = newUser;
        this.editing = false;
      })
  }

  getPosts(){
    this.ps.getPosts(this.user.id)
      .subscribe(posts => {
        // console.log(posts);
        this.posts = posts;
      })
  }

  pushPost(newPost){
    this.posts.push(newPost);
  }

  deletePost(data){
    // this.posts.splice(data.index, 1);
    this.ps.deletePost(data.id)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(data.index, 1);
      })
  }

  likePost(postId){
    this.ps.like(this.user.id, postId)
      .subscribe(res => {
        console.log(res);
      })
  }

}
