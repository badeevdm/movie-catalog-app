import { Component, input, output } from '@angular/core';
import { IMovie } from '../../models';

@Component({
  selector: 'movie-app-movie-card',
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.less',
})
export class MovieCard {
  public readonly movie = input.required<IMovie>();
  public readonly onClickMovieCardEvent = output<IMovie>();
}
