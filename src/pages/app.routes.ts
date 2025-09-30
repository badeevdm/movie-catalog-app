import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./movies/movies').then((m) => m.Movies),
    data: { name: 'Каталог фильмов' },
  },
];
