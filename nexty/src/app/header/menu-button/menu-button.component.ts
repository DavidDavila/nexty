import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../shared/services/facebook.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

	public isMenuOpen: boolean = false;

  constructor(private _fb: FacebookService) { }

  ngOnInit() {
  }
  logout(){
  	this.isMenuOpen = false;
  	this._fb.logout();
  }

}
