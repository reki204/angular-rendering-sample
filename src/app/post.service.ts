import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly http = inject(HttpClient);

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  public getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
