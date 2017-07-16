import { Component, OnInit } from '@angular/core';
import { FacebookService } from './shared/services/facebook.service';
import { GeolocationService } from './shared/services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

  }
  ngOnInit(){	
  }
}
