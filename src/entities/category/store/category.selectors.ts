import { createSelector } from '@ngrx/store';
import { categoryFeature } from '.';

const selectCategoryState = categoryFeature.selectCategoryState;

export const selectItems = createSelector(selectCategoryState, (state) => state.items);
export const selectIsLoading = createSelector(selectCategoryState, (state) => state.isLoading);
