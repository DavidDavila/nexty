import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-comment',
  templateUrl: './option-comment.component.html',
  styleUrls: ['./option-comment.component.scss']
})
export class OptionCommentComponent implements OnInit {

	@Input() likes: number;
	public textTooltip: string = 'You <span class="ico ico-heart active"></span> this';
	public showTooltip: boolean = false;
  public options: Array<string> = ['<span class="ico ico-delete"></span>Delete post','<span class="ico-report"></span>Report']
  constructor() { }

  ngOnInit() {
  }
  sendLike() {
  	this.showTooltip = true;
  	setTimeout(() => {
  		this.showTooltip = false;
  	}, 3000)
  }
  setOption($event) {
    console.log($event)
  }

}
