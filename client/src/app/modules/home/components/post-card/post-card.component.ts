import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@business/posts/models/post.model';
import { Router } from '@angular/router';
import { PostService } from '@business/posts/services/posts.service';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() public uniquePost: Post;
    public imageUrl = this.http.imageUrl;

    constructor(private router: Router, private http: PostService) {}

    ngOnInit(): void { }

    goToPost(): void {
        this.router.navigate(['/blog/', this.uniquePost._id]);
    }

}
