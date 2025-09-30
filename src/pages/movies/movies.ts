import { Component, inject } from '@angular/core';
import { Header } from '../../widgets/header';
import { MoviesFilter } from '../../features/movies-filter';
import { MovieCard } from '../../entities/movie/components/movie-card';
import { IMovie } from '../../entities/movie/models';

@Component({
  selector: 'app-movies',
  imports: [Header, MoviesFilter, MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.less',
})
export class Movies {
  public readonly movies: IMovie[] = [
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
    {
      id: '1',
      title: 'Angular',
      description: 'Angular Desc',
      year: 2025,
      country: 'USA',
      image: '',
    },
  ];
}
