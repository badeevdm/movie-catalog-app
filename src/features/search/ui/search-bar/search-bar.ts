import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiIcon, TuiTextfield } from '@taiga-ui/core';
import { SearchBarStore } from '../../store/search-bar-store.service';

@Component({
  selector: 'app-search-bar',
  imports: [TuiTextfield, FormsModule, TuiButton, TuiIcon],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.less',
  providers: [SearchBarStore],
})
export class SearchBar {
  private readonly searchBarStore = inject(SearchBarStore);

  public readonly isOpen = this.searchBarStore.isOpen;
  public search = '';
  public isVisible = false;

  public onSearch(inputRef: HTMLInputElement): void {
    this.isVisible = !this.isVisible;
    inputRef.focus();
  }

  public onCancelSearch(): void {
    this.isVisible = !this.isVisible;
  }

  public onInputSearch(): void {
    this.searchBarStore.query.set('123');
  }
}
