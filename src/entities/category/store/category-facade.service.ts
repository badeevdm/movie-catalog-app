import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CategoryActions } from './category.actions';
import { ICategory } from '../models';
import { CategorySelectors } from '.';

@Injectable({ providedIn: 'root' })
export class CategoryFacade {
  private readonly store = inject(Store);

  public loadCategories() {
    this.store.dispatch(CategoryActions.loadCategories());
  }

  public selectCategories(): Observable<ICategory[]> {
    return this.store.select(CategorySelectors.selectItems);
  }

  public selectIsLoading(): Observable<boolean> {
    return this.store.select(CategorySelectors.selectIsLoading);
  }
}
