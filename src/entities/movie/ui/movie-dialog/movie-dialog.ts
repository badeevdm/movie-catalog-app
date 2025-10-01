import { Component } from '@angular/core';
import { IMovie, IMovieDialog } from '../../models';
import { TuiDialogContext } from '@taiga-ui/core';
import { injectContext } from '@taiga-ui/polymorpheus';
import { ICategory } from '../../../category';
import { TuiChip } from '@taiga-ui/kit';
import { GetCategoriesPipe } from '../../lib';

@Component({
  selector: 'movie-app-movie-dialog',
  imports: [TuiChip, GetCategoriesPipe],
  templateUrl: './movie-dialog.html',
  styleUrl: './movie-dialog.less',
})
export class MovieDialog {
  public readonly context = injectContext<TuiDialogContext<IMovieDialog, IMovieDialog>>();
  public categories: ICategory[] = [{ id: 1, name: 'Боевик', slug: 'action' }];
  protected get movieDialogContext(): IMovieDialog {
    return this.context.data;
  }
}
