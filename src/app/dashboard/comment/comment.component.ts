import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

	public contentComment : string = 'The bedding was hardly able to cover it and seemed ready to slide off any moment. <a href="#">http://bit.ly/lksdjf</a>	'
  constructor() { }

  ngOnInit() {
  }

}
