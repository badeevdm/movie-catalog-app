import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/movies').then((m) => m.Movies),
    title: 'Каталог',
  },
  { path: '**', redirectTo: '' },
];
