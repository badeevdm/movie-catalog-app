import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { CategoryApi } from '../../api';
import { CategoryActions } from '../category.actions';

@Injectable()
export class CategoryEffects {
  private actions$ = inject(Actions);
  private api = inject(CategoryApi);

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.loadCategories),
      switchMap(() => this.api.list()),
      map((items) => CategoryActions.loadCategoriesSuccess({ items })),
      catchError((error) => of(CategoryActions.loadCategoriesFailure({ error }))),
    ),
  );

  showErrorIfLoadCategoriesFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CategoryActions.loadCategoriesFailure),
        tap((error) => console.error('loadCategoriesFailure error=', error)),
      ),
    { dispatch: false },
  );
}
