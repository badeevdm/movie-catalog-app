import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICategory } from '../models';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  private http = inject(HttpClient);
  private base = '/api/categories';

  list() {
    return this.http.get<ICategory[]>(this.base);
  }
}
