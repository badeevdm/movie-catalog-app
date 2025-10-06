import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMovie } from '../models';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieApi {
  private http = inject(HttpClient);
  private base = '/api/movies';

  list(query?: { searchString: string }) {
    return this.http
      .get<IMovie[]>(this.base)
      .pipe(
        map((items) =>
          query?.searchString
            ? items.filter((item) =>
                item.title.toLowerCase().includes(query.searchString.toLowerCase()),
              )
            : items,
        ),
      );
  }
}
