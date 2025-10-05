import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { MovieApi } from '../../api';
import { MovieActions } from '../movie.actions';

@Injectable()
export class MovieEffects {
  private actions$ = inject(Actions);
  private api = inject(MovieApi);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMovies),
      switchMap(() =>
        this.api.list().pipe(
          map((items) => MovieActions.loadMoviesSuccess({ items })),
          catchError((error) => of(MovieActions.loadMoviesFailure({ error }))),
        ),
      ),
    ),
  );

  showErrorIfLoadMoviesFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.loadMoviesFailure),
      tap((error) => console.error('loadMoviesFailure error=', error)),
    ),
  );
}
