import { Component, OnInit } from '@angular/core';
import { FacebookService } from './../shared/services/facebook.service';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

	public data : any;
	public showDistance: boolean = false;
	public selectedOption: string;
	public optionsDistance: Array<string> = [
		'50 m',
		'250 m',
		'500 m',
		'750 m',
		'1 km',		
	]
  constructor() { }

  ngOnInit() {
  	this.selectedOption = this.optionsDistance[4];
    this._fb.getData().subscribe((data)=>{
      console.log(data)
      this.data = data;
    })
  }
  setDistance($event) {
  	this.selectedOption = $event;
  }
}
