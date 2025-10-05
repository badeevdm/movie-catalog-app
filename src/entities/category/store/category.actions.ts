import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { ICategory } from '../models';

export const CategoryActions = createActionGroup({
  source: 'Category',
  events: {
    'Load Categories': emptyProps(),
    'Load Categories Success': props<{ items: ICategory[] }>(),
    'Load Categories Failure': props<{ error: any }>(),

    clear: emptyProps(),
  },
});
