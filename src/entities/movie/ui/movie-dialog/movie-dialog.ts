import { Component } from '@angular/core';
import { IMovie, IMovieDialog } from '../../models';
import { TuiDialogContext } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { CategoryChip } from '../../../category';

@Component({
  selector: 'movie-app-movie-dialog',
  imports: [CategoryChip],
  templateUrl: './movie-dialog.html',
  styleUrl: './movie-dialog.less',
})
export class MovieDialog {
  public readonly context = injectContext<TuiDialogContext<IMovieDialog, IMovieDialog>>();

  public get movie(): IMovie {
    return this.context.data.movie;
  }
}
