import { createFeature } from '@ngrx/store';
import { movieReducer } from './reducer/movie.reducer';

export { MovieEffects } from './effects/movie.effects';
export { MovieActions } from './movie.actions';
export * as MovieSelectors from './movie.selectors';

export const movieFeature = createFeature({
  name: 'movie',
  reducer: movieReducer,
});
