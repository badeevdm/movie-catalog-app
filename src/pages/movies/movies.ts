import { Component, inject } from '@angular/core';
import { MovieCard } from '../../entities/movie/components/movie-card';
import { IMovie } from '../../entities/movie/models';

@Component({
  selector: 'app-movies',
  imports: [MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.less',
})
export class Movies {
  public readonly movies: IMovie[] = [
    {
      id: '1',
      title: 'Angular',
      description: 'Angular',
      year: 2025,
      country: 'USA',
      image: '',
    },
  ];
}
