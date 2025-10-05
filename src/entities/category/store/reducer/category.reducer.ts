import { createReducer, on } from '@ngrx/store';
import { ICategory } from '../../models';
import { CategoryActions } from '../';

export interface CategoryState {
  items: ICategory[];
  isLoading: boolean;
}

const initialState: CategoryState = {
  items: [],
  isLoading: false,
};

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.loadCategories, (state) => ({
    ...state,
    items: [],
    isLoading: true,
  })),
  on(CategoryActions.loadCategoriesSuccess, (state, { items }) => ({
    ...state,
    items,
  })),
  on(CategoryActions.loadCategoriesSuccess, CategoryActions.loadCategoriesFailure, (state) => ({
    ...state,
    isLoading: false,
  })),

  on(CategoryActions.clear, () => initialState),
);
