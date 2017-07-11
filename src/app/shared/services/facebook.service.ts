import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

Injectable()

declare const FB:any;

export class FacebookService {

  private data: BehaviorSubject<any>;

  constructor() {
    FB.init({
      appId      : '649753935223490',
      /*appId      : '124636538143910',
      */
      cookie     : false,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.9' // use graph api version 2.5
    });
    this.data = new BehaviorSubject('');
    this.init();
  }

  init(){
    FB.getLoginStatus(response => {
      if( response.status === 'connected' ) {       
        this.me();
      }else{
        this.login();
      }
    })
  }

  login(){
    FB.login((response) => {

      if (response.authResponse) {
     ;
        this.me();
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  logout() {
    FB.logout();
  }

  me(){
    FB.api(
      '/me',
      'GET',
      {"fields":"birthday,about,email,devices,education,first_name,gender,hometown,id,inspirational_people,installed,interested_in,is_shared_login,is_verified,languages,last_name,link,locale,location,meeting_for,middle_name,name,favorite_athletes,favorite_teams,political,quotes,relationship_status,religion,age_range,picture.width(240)"},
      (response) => {
        this.data.next(response);
      }
    );      
  }
  getData(){
    return this.data.asObservable();
  }


}
