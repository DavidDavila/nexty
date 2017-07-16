import { Component, OnInit } from '@angular/core';
import { FacebookService } from './../shared/services/facebook.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

	public data : any;
  constructor(private _fb: FacebookService) { }
  
  ngOnInit() {
  	this._fb.getData().subscribe((data)=>{
  		console.log(data)
  		this.data = data;
  	})
  }

}
