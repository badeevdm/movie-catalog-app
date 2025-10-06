import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, tuiDialog, TuiDialogService, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { SearchBarStore } from '../../store/search-bar-store.service';
import { IMovie, MovieDialog } from '../../../../entities/movie';
import { take } from 'rxjs';
import { PolymorpheusComponent } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-search-bar',
  imports: [TuiTextfield, FormsModule, TuiButton, TuiIcon],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.less',
  providers: [SearchBarStore],
})
export class SearchBar {
  private readonly searchBarStore = inject(SearchBarStore);
  private readonly dialog = inject(TuiDialogService);

  public readonly results = this.searchBarStore.results;
  public readonly isOpenResults = this.searchBarStore.isOpenResults;
  public readonly search = this.searchBarStore.query;
  public isVisible = false;

  public onSearch(inputRef: HTMLInputElement): void {
    this.isVisible = !this.isVisible;
    inputRef.focus();
  }

  public onCancelSearch(): void {
    this.isVisible = !this.isVisible;
    this.searchBarStore.query.set('');
  }

  public onInputSearch(query: string): void {
    this.searchBarStore.query.set(query);
  }

  public openMovieDialog(movie: IMovie): void {
    this.dialog
      .open(new PolymorpheusComponent(MovieDialog), { data: { movie } })
      .pipe(take(1))
      .subscribe();
    this.onCancelSearch();
  }
}
