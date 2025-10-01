import { Component, input, output } from '@angular/core';
import { CategoryChip, ICategory } from '../../../../entities/category';
import { RouterModule } from '@angular/router';
import { IMovie, MovieCard } from '../../../../entities/movie';
import { TuiLoader } from '@taiga-ui/core';

@Component({
  selector: 'movie-app-category-section',
  imports: [CategoryChip, RouterModule, MovieCard, TuiLoader],
  templateUrl: './category-section.html',
  styleUrl: './category-section.less',
})
export class CategorySection {
  public readonly movies = input.required<IMovie[]>();
  public readonly categories = input.required<ICategory[]>();

  public readonly onSelectMovieEvent = output<IMovie>();
}
