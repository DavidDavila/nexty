import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-photo-comment',
  templateUrl: './photo-comment.component.html',
  styleUrls: ['./photo-comment.component.scss']
})
export class PhotoCommentComponent implements OnInit {

	@Input() photo: string;
	@Input() time: string;
	public r: number = 90;
	public pct: number;
  constructor() { }

  ngOnInit() {
  	this.calculateBorder(this.time)
  }
  calculateBorder(val){
	val = parseInt(val);

	if (isNaN(val)) {
	val = 100; 
	}
	else{
	
	var c = Math.PI*(25*2);

	if (val < 0) { val = 0;}
	if (val > 100) { val = 100;}

	this.pct = ((100-val)/100)*c;

	
	}
  }

}
