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
  }
}
