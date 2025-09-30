import { Component } from '@angular/core';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiSearch } from '@taiga-ui/layout';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'movie-app-movies-filter',
  imports: [
    TuiSearch,
    TuiTextfield,
    TuiSelect,
    TuiDataListWrapper,
    FormsModule,
    ReactiveFormsModule,
    TuiChevron,
  ],
  templateUrl: './movies-filter.html',
  styleUrl: './movies-filter.less',
})
export class MoviesFilter {
  protected search = '';
  protected category = '';
}
