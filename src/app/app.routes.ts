import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { movieFeature, MovieEffects } from '../entities/movie/store';
import { categoryFeature, CategoryEffects } from '../entities/category/store';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/movies/ui/movies').then((m) => m.Movies),
    title: 'Каталог',
    providers: [
      provideState(movieFeature),
      provideState(categoryFeature),
      provideEffects(MovieEffects, CategoryEffects),
    ],
  },
  { path: '**', redirectTo: '' },
];
