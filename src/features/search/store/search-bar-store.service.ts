import { DestroyRef, effect, inject, Injectable, signal } from '@angular/core';
import { MovieApi } from '../../../entities/movie/api';
import { IMovie } from '../../../entities/movie';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class SearchBarStore {
  private api = inject(MovieApi);
  private readonly destroyRef = inject(DestroyRef);
  private readonly query$ = new Subject<string>();

  public readonly results = signal<IMovie[]>([]);
  public readonly query = signal<string>('');
  public readonly isOpenResults = signal<boolean>(false);

  constructor() {
    effect(() => {
      const query = this.query().trim();
      this.isOpenResults.set(!!query);
      this.query$.next(query);
    });

    this.loadResults();
  }

  private loadResults() {
    this.query$
      .pipe(
        filter(Boolean),
        debounceTime(350),
        distinctUntilChanged(),
        switchMap((query) => this.api.list({ searchString: query })),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((res) => this.results.set(res));
  }
}
