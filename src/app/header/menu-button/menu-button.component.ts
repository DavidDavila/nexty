import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacebookService } from '../../shared/services/facebook.service';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Output() selectModal = new EventEmitter();

	public isMenuOpen: boolean = false;

  constructor(private _fb: FacebookService) { }

  ngOnInit() {
  }
  logout(){
  	this.isMenuOpen = false;
  	this._fb.logout();
  }

}
