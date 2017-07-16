import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacebookService } from '../../services/facebook.service';
import { GeolocationService } from '../../services/geolocation.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss']
})
export class ModalProfileComponent implements OnInit {

	@Output()showModal = new EventEmitter();

	public data: any;
	public dataLocation: any;
  public form = new FormGroup ({
    linkedin: new FormControl(),
    twitter: new FormControl(),
    instagram: new FormControl(),
    web: new FormControl(),
    comment: new FormControl()
  });

  constructor(private _fb: FacebookService, private _geolocationService: GeolocationService) {}

  ngOnInit() {
  	this._fb.getData().subscribe((data)=>{
  	  console.log(data)
  	  this.data = data;
  	})
  	this._geolocationService.getData().subscribe((data)=>{
  	  console.log(data)
  	  this.dataLocation = data;
  	})
  }

  onSubmit() {
    console.log(this.form.controls['twitter'].value)
  }

}
