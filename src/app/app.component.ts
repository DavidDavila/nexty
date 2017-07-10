import { Component, OnInit } from '@angular/core';
import { FacebookService } from './shared/services/facebook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FacebookService]
})
export class AppComponent {
  constructor(private _fb: FacebookService) {

  }
  ngOnInit(){
  	this._fb.init();
  	if(navigator.geolocation){
  	    navigator.geolocation.getCurrentPosition(position => {  	       
  	       console.log(position.coords); 
  	    }, (error) => {
  	    	console.log('error')
  	    });
  	}else {
  		console.log('no location');
  	}
  }
}
