import { Pipe, PipeTransform } from '@angular/core';
import { IMovie } from '../../../entities/movie';

@Pipe({
  name: 'getMoviesByCategory',
})
export class GetMoviesByCategoryPipe implements PipeTransform {
  transform(movies: IMovie[], categoryId: string): IMovie[] {
    return movies.filter(({ categoryIds }) => categoryIds[0] === categoryId);
  }
}
