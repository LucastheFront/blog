import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@core/api/post.model';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() uniquePost: Post;

    constructor() {}

    ngOnInit(): void {}
}
