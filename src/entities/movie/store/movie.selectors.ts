import { createSelector } from '@ngrx/store';
import { movieFeature } from '.';

const selectMovieState = movieFeature.selectMovieState;

export const selectItems = createSelector(selectMovieState, (state) => state.items);
export const selectIsLoading = createSelector(selectMovieState, (state) => state.isLoading);
