import { effect, inject, Injectable, signal } from '@angular/core';
import { MovieApi } from '../../../entities/movie/api';

@Injectable()
export class SearchBarStore {
  private api = inject(MovieApi);

  public readonly query = signal<string>('');
  public readonly isOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const query = this.query().trim();
      this.isOpen.set(!!query);
    });
  }
}
