import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { IMovie } from '../models';

export const MovieActions = createActionGroup({
  source: 'Movie',
  events: {
    'Load Movies': emptyProps(),
    'Load Movies Success': props<{ items: IMovie[] }>(),
    'Load Movies Failure': props<{ error: any }>(),

    clear: emptyProps(),
  },
});
