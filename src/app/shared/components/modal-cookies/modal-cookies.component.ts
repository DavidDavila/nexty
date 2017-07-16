import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-cookies',
  templateUrl: './modal-cookies.component.html',
  styleUrls: ['./modal-cookies.component.scss']
})
export class ModalCookiesComponent implements OnInit {
	@Output()showModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
