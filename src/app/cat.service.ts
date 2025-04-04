import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private readonly http = inject(HttpClient);

  public getPhotos(): Observable<Cat[]> {
    return this.http.get<Cat[]>(
      'https://api.thecatapi.com/v1/images/search?limit=10'
    );
  }
}
