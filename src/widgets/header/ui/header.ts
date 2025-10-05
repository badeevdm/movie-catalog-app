import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { TuiButton, TuiIcon, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';
import { HideOnScrollDirective } from '../lib';

@Component({
  selector: 'movie-app-header',
  imports: [
    TuiHeader,
    TuiTitle,
    TuiTextfield,
    FormsModule,
    TuiButton,
    TuiIcon,
    RouterLink,
    RouterModule,
    HideOnScrollDirective,
  ],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {
  public search = '';
  public isVisible = false;

  public onSearch(inputRef: HTMLInputElement): void {
    this.isVisible = !this.isVisible;
    inputRef.focus();
  }

  public onCancelSearch(): void {
    this.isVisible = !this.isVisible;
  }
}
