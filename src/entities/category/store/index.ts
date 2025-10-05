import { createFeature } from '@ngrx/store';
import { categoryReducer } from './reducer/category.reducer';

export { CategoryEffects } from './effects/category.effects';
export { CategoryActions } from './category.actions';
export * as CategorySelectors from './category.selectors';

export const categoryFeature = createFeature({
  name: 'category',
  reducer: categoryReducer,
});
