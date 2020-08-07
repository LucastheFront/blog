import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'bg-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
    public id: string;

    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }

}
