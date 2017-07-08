import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../shared/services/facebook.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public data: any;
  public name: string;
  public uploadedImages: Array<string> = [];
  public optionsTime: Array<string> = [ 
    '24 hours', '12 hours', '6 hours', '3 hours','1 hour',  
  ]
  public visibleTime: string;


  constructor(private _fb: FacebookService) {
      this.visibleTime = this.optionsTime[0]
   }
  
  ngOnInit() {
    this._fb.getData().subscribe((data)=>{
      console.log(data)
      this.data = data;
    })
  }
  login() {
  	this._fb.login();
  }
  parseHtml(){
    this.name.replace(/(?:\r\n|\r|\n)/g, '<br />') 
  }
  previewImg(input) {

    if (input.currentTarget.files && input.currentTarget.files[0]) {
      var reader = new FileReader();
      reader.onload = ((event) => {
        this.uploadedImages.push(event.target.result);
      }).bind(this)
      reader.readAsDataURL(input.currentTarget.files[0]);
    }
  }
  deleteImg(index) {
    this.uploadedImages.splice(index, 1);
  }
  setTime(option){
    this.visibleTime = option;
  }
}
