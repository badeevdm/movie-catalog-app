import { ICategory } from '../../category';
import { IMovie } from './movie.model';

export interface IMovieDialog {
  movie: IMovie;
  categories: ICategory[];
}
