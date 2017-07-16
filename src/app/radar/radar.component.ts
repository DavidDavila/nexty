import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
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
  	this.selectedOption = this.optionsDistance[4]
  }
  setDistance($event) {
  	this.selectedOption = $event;
  }
}
