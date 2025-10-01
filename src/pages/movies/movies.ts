import { Component } from '@angular/core';
import { IMovie } from '../../entities/movie/models';
import { CategorySection } from '../../features/browse-category';
import { tuiDialog } from '@taiga-ui/core';
import { MovieDialog } from '../../entities/movie';
import { take } from 'rxjs';
import { ICategory } from '../../entities/category';

@Component({
  selector: 'movie-app-movies',
  imports: [CategorySection],
  templateUrl: './movies.html',
  styleUrl: './movies.less',
})
export class Movies {
  private readonly dialog = tuiDialog(MovieDialog, {
    dismissible: true,
  });

  public categories: ICategory[] = [{ id: 1, name: 'Боевик', slug: 'action' }];
  public movies: IMovie[] = [
    {
      id: 1,
      title: 'Рейд',
      year: 2011,
      poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=600',
      country: 'USA',
      categoryIds: [1],
      duration: '1ч 30м',
      description:
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
    },
    {
      id: 2,
      title: 'Безумный Макс: Дорога ярости',
      year: 2015,
      poster: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=600',
      country: 'USA',
      categoryIds: [1],
      duration: '1ч 30м',
      description: 'Lorem ipsum',
    },
  ];

  public openMovieDialog(movie: IMovie): void {
    this.dialog({ movie, categories: this.categories }).pipe(take(1)).subscribe();
  }
}
