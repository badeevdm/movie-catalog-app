import { Component, inject, OnInit } from '@angular/core';
import { tuiDialog, TuiLoader } from '@taiga-ui/core';
import { take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GetMoviesByCategoryPipe } from '../lib';
import { CategoryFacade } from '../../../entities/category/store/category-facade.service';
import { MovieFacade } from '../../../entities/movie/store/movie-facade.service';
import { IMovie, MovieDialog } from '../../../entities/movie';
import { CategorySection } from '../../../features/browse-category/ui';
import { Header } from '../../../widgets/header';

@Component({
  selector: 'movie-app-movies',
  imports: [CategorySection, GetMoviesByCategoryPipe, TuiLoader, Header],
  templateUrl: './movies.html',
  styleUrl: './movies.less',
})
export class Movies implements OnInit {
  private readonly categoryFacade = inject(CategoryFacade);
  private readonly movieFacade = inject(MovieFacade);
  private readonly dialog = tuiDialog(MovieDialog, {
    dismissible: true,
  });

  public readonly movies = toSignal(this.movieFacade.selectMovies(), { initialValue: [] });
  public readonly isLoadingMovies = toSignal(this.movieFacade.selectIsLoading(), {
    initialValue: false,
  });

  public readonly categories = toSignal(this.categoryFacade.selectCategories(), {
    initialValue: [],
  });
  public readonly isLoadingCategories = toSignal(this.categoryFacade.selectIsLoading(), {
    initialValue: false,
  });

  public openMovieDialog(movie: IMovie): void {
    this.dialog({ movie }).pipe(take(1)).subscribe();
  }

  public ngOnInit(): void {
    this.movieFacade.loadMovies();
    this.categoryFacade.loadCategories();
  }
}
