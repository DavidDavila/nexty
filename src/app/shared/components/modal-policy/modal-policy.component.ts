import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-modal-policy',
  templateUrl: './modal-policy.component.html',
  styleUrls: ['./modal-policy.component.scss']
})
export class ModalPolicyComponent implements OnInit {

	@Output()showModal = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
