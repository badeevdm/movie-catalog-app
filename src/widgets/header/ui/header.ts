import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { HideOnScrollDirective } from '../lib';
import { SearchBar } from '../../../features/search/ui/search-bar/search-bar';

@Component({
  selector: 'movie-app-header',
  imports: [
    TuiHeader,
    TuiTitle,
    TuiTextfield,
    FormsModule,
    RouterLink,
    RouterModule,
    HideOnScrollDirective,
    SearchBar,
  ],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {}
