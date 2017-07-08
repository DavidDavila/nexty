import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../shared/services/facebook.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public data: any;

  constructor(private _fb: FacebookService) { }
  
  ngOnInit() {
    this._fb.getData().subscribe((data)=>{
      console.log(data)
      this.data = data;
    })
  }
  login() {
  	this._fb.login();
  }

}
