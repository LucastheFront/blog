import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../core/api';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private readonly url = 'api/v1/posts';
    public imageUrl = 'http://localhost:5000/';

    constructor(private baseHttpService: BaseHttpService) {}

    public getAllPosts(): Observable<Post[]> {
        return this.baseHttpService.getAll(`${this.url}`);
    }

    public getPostById(id: string): Observable<Post> {
        return this.baseHttpService.getById(`${this.url}`, `${id}`);
    }

    public createPost(post: FormData): Observable<FormData> {
        return this.baseHttpService.create(`${this.url}`, post);
    }
}
