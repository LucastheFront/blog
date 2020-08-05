import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    private url = 'http://localhost:5000/api/v1';

    constructor(private httpClient: HttpClient) {}

    public getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${this.url}/posts`);
    }

    public createPost(post: Post): Observable<Post> {
        return this.httpClient.post<Post>(`${this.url}/posts`, post);
    }
}
