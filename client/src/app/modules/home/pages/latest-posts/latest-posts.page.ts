import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseHttpService } from '@core/api/base-http.service';
import { NewPostDialog } from '@modules/home/components/new-post-dialog/new-post.dialog';

@Component({
    selector: 'bg-latest-posts',
    templateUrl: './latest-posts.page.html',
    styleUrls: ['./latest-posts.page.scss']
})
export class LatestPostsPage implements OnInit {
    public posts: any;

    constructor(private http: BaseHttpService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
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

    openDialog(): void {
        this.dialog.open(NewPostDialog, {
            width: '500px',
            panelClass: 'new-post-dialog'
        });
    }

}
