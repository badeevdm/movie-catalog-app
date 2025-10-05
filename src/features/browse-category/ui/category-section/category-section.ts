import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMovie, MovieCard } from '../../../../entities/movie';
import { CategoryChip, ICategory } from '../../../../entities/category';

@Component({
  selector: 'movie-app-category-section',
  imports: [CategoryChip, RouterModule, MovieCard],
  templateUrl: './category-section.html',
  styleUrl: './category-section.less',
})
export class CategorySection {
  public readonly movies = input.required<IMovie[]>();
  public readonly category = input.required<ICategory>();

  public readonly onSelectMovieEvent = output<IMovie>();
}
