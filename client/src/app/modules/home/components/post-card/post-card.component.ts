import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@core/api/post.model';
import { Router } from '@angular/router';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() public uniquePost: Post;
    public serverUrl = 'http://localhost:5000/';

    constructor(private router: Router) {}

    ngOnInit(): void { }

    goToPost(): void {
        this.router.navigate(['/blog/', this.uniquePost._id]);
    }

}
