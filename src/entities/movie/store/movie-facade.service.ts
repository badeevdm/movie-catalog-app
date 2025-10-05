import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieActions } from './movie.actions';
import { IMovie } from '../models';
import { MovieSelectors } from '.';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieFacade {
  private readonly store = inject(Store);

  public loadMovies() {
    this.store.dispatch(MovieActions.loadMovies());
  }

  public selectMovies(): Observable<IMovie[]> {
    return this.store.select(MovieSelectors.selectItems);
  }

  public selectIsLoading(): Observable<boolean> {
    return this.store.select(MovieSelectors.selectIsLoading);
  }
}
