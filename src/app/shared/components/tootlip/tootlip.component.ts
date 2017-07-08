import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tootlip',
  templateUrl: './tootlip.component.html',
  styleUrls: ['./tootlip.component.scss']
})
export class TootlipComponent implements OnInit {
	@Input() text: string;
	@Input() style: string;
  constructor() { }

  ngOnInit() {
  }

}
