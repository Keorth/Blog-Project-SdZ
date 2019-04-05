import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

@Input() post: {
  title: String,
  content: String,
  loveIts: number,
  create_at: Date
};

  constructor() {}

  ngOnInit() {
  }

onLoveIts() {
  this.post.loveIts += 1;
}

onNotLove() {
  this.post.loveIts -= 1;
}
}
