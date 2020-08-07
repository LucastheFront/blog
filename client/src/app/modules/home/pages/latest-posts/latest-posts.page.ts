import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseHttpService } from '@core/api/base-http.service';
import { Post } from '@core/api/post.model';
import { NewPostDialog } from '@modules/home/components/new-post-dialog/new-post.dialog';

@Component({
    selector: 'bg-latest-posts',
    templateUrl: './latest-posts.page.html',
    styleUrls: ['./latest-posts.page.scss']
})
export class LatestPostsPage implements OnInit {
    public posts: Post[];

    constructor(
        private http: BaseHttpService,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private dialog: MatDialog
    ) {
        iconRegistry.addSvgIcon(
            'add-post',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/addpost.svg')
        );
    }

    ngOnInit(): void {
        this.getAllPosts();
    }

    private getAllPosts(): void {
        this.http.getPosts().subscribe(
            (response: Post[]) => this.posts = response,
            error => console.log(error)
        );
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(NewPostDialog, {
            width: '500px',
            panelClass: 'new-post-dialog'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.getAllPosts();
        });
    }

}
