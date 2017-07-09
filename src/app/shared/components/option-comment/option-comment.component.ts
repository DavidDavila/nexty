import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-comment',
  templateUrl: './option-comment.component.html',
  styleUrls: ['./option-comment.component.scss']
})
export class OptionCommentComponent implements OnInit {

	@Input() likes: number;
	public textTooltip: string = 'You <span class="ico-heart in"></span> this';
	public showTooltip: boolean = false
  constructor() { }

  ngOnInit() {
  }
  sendLike(){
  	this.showTooltip = true;
  	setTimeout(() => {
  		this.showTooltip = false;
  	}, 3000)
  }

}
