import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacebookService } from './../shared/services/facebook.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() showModal = new EventEmitter();
	public data: any;
  constructor(private _fb: FacebookService) { }
  ngOnInit() {
  	this._fb.getData().subscribe((data)=>{
  		console.log(data)
  		this.data = data;
  	})
  }

}
