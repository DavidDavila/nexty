import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-terms',
  templateUrl: './modal-terms.component.html',
  styleUrls: ['./modal-terms.component.scss']
})
export class ModalTermsComponent implements OnInit {
	@Output()showModal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
