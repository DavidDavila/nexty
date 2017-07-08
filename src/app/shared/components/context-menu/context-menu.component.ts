import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {

	@Input() options: Array<string>;
	@Input() style: string;
	@Output() setOption = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
