import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@core/api/post.model';
import { Router } from '@angular/router';
import { BaseHttpService } from '@core/api/base-http.service';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() public uniquePost: Post;
    public imageUrl = this.http.imageUrl;

    constructor(private router: Router, private http: BaseHttpService) {}

    ngOnInit(): void { }

    goToPost(): void {
        this.router.navigate(['/blog/', this.uniquePost._id]);
    }

}
