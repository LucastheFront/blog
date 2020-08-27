import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from '@business/posts/services/posts.service';
import { Post } from '@business/posts/models/post.model';
import { NewPostDialog } from '@modules/home/components/new-post-dialog/new-post.dialog';

@Component({
    selector: 'bg-latest-posts',
    templateUrl: './latest-posts.page.html',
    styleUrls: ['./latest-posts.page.scss']
})
export class LatestPostsPage implements OnInit {
    public posts: Post[];

    constructor(
        private postService: PostService,
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
        this.postService.getAllPosts().subscribe(
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
