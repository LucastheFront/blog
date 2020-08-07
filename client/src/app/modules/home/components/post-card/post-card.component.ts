import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@core/api/post.model';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() public uniquePost: Post;
    public serverUrl = 'http://localhost:5000/';

    constructor() {}

    ngOnInit(): void { }

}
