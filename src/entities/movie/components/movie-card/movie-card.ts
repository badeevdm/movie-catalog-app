import { Component, input } from '@angular/core';
import { TuiAppearance, TuiButton, TuiIcon } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { IMovie } from '../../models';

@Component({
  selector: 'movie-app-movie-card',
  imports: [TuiCardLarge, TuiButton, TuiAppearance, TuiIcon, TuiHeader],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.less',
})
export class MovieCard {
  public readonly movie = input.required<IMovie>();
}
