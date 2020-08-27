import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@business/posts/models/post.model';
import { PostService } from '@business/posts/services/posts.service';

@Component({
    selector: 'bg-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    public id: string;
    public post: Post;
    public imageUrl = this.http.imageUrl;

    constructor(
        private route: ActivatedRoute,
        private http: PostService
    ) {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

    ngOnInit(): void {
        this.getPostById(this.id);
    }

    private getPostById(id: string): void {
        this.http.getPostById(id).subscribe(
            (response: Post) => this.post = response,
            error => console.log(error)
        );
    }

}
