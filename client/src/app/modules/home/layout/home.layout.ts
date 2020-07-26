import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '@core/api/base-http.service';
import { Post } from '@core/api/post.model';

@Component({
    selector: 'bg-home-layout',
    templateUrl: './home.layout.html',
    styleUrls: ['./home.layout.scss']
})
export class HomeLayout implements OnInit {
    public posts: any;

    constructor(private httpService: BaseHttpService) {}

    ngOnInit(): void {
        this.httpService.getPosts().subscribe(
            (response: Post) => {
                this.posts = response;
                console.log(response);
              },
              error => {
                console.log(error);
              });
    }
}
