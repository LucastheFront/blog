import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '@core/api/base-http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'bg-latest-posts',
    templateUrl: './latest-posts.page.html',
    styleUrls: ['./latest-posts.page.scss']
})
export class LatestPostsPage implements OnInit {
    public posts: any;

    constructor(private http: BaseHttpService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'add-post',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/addpost.svg')
        );
    }

    ngOnInit(): void {
        this.http.getPosts().subscribe(
            response => {
                this.posts = response;
                console.log(response);
            },
            error => console.log(error)
        );
    }

}
