import { createFeature, createReducer, on } from '@ngrx/store';
import { IMovie } from '../../models';
import { MovieActions } from '../';

export interface MovieState {
  items: IMovie[];
  isLoading: boolean;
}

const initialState: MovieState = {
  items: [],
  isLoading: false,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.loadMovies, (state) => ({
    ...state,
    items: [],
    isLoading: true,
  })),
  on(MovieActions.loadMoviesSuccess, (state, { items }) => ({
    ...state,
    items,
  })),
  on(MovieActions.loadMoviesFailure, MovieActions.loadMoviesSuccess, (state) => ({
    ...state,
    isLoading: false,
  })),

  on(MovieActions.clear, () => initialState),
);
