import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Post } from '@core/api/post.model';

@Component({
    selector: 'bg-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
    @Input() uniquePost;
    imageArrayBuffer: Array<number>;
    imageUrl;

    constructor(private domSanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.imageArrayBuffer = this.uniquePost.image.data.data;
        const typedArray = new Uint8Array(this.imageArrayBuffer);
        const stringChar = typedArray.reduce((data, byte) => {
            return data + String.fromCharCode(byte);
        }, '');
        const base64String = btoa(stringChar);
        this.imageUrl = `data:image/jpeg;base64,${base64String}`;
    }
}
