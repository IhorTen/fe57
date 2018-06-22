import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { SigninComponent } from './public/signin/signin.component';
import { SignupComponent } from './public/signup/signup.component';
import { HomeComponent } from './secure/home/home.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { UserService } from './-services/user.service';
import { AuthGuard } from './auth.guard';
import { InnerGuard } from './inner.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './secure/users/users.component';
import { PostsComponent } from './secure/posts/posts.component';
import { AddPostComponent } from './secure/add-post/add-post.component';
import { PostComponent } from './secure/post/post.component';
import { FollowBtnComponent } from './secure/follow-btn/follow-btn.component';
import { SubscriptionsComponent } from './secure/subscriptions/subscriptions.component';
import { LikeComponent } from './secure/like/like.component';

const APP_ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '', component: PublicComponent, canActivate: [InnerGuard], children: [
      { path: 'login', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  {
    path: '', component: SecureComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },
      { path: 'profile/:id', component: ProfileComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    UsersComponent,
    PostsComponent,
    AddPostComponent,
    PostComponent,
    FollowBtnComponent,
    SubscriptionsComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [UserService, AuthGuard, InnerGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
