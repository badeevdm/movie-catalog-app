import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMovie } from '../models';

@Injectable({ providedIn: 'root' })
export class MovieApi {
  private http = inject(HttpClient);
  private base = '/api/movies';

  list() {
    return this.http.get<IMovie[]>(this.base);
  }
}
