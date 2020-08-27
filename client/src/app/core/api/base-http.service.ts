import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    private gatewayUrl = 'http://localhost:5000';

    constructor(private httpClient: HttpClient) {}

    public getAll<T>(url: string): Observable<T[]> {
        return this.httpClient.get<T[]>(`${this.gatewayUrl}/${url}`);
    }

    public getById<T>(url: string, id: string): Observable<T> {
        return this.httpClient.get<T>(`${this.gatewayUrl}/${url}/${id}`);
    }

    public create<T>(url: string, body: T): Observable<T> {
        return this.httpClient.post<T>(`${this.gatewayUrl}/${url}`, body);
    }
}
