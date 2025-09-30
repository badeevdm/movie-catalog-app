import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiButton, TuiIcon, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'movie-app-header',
  imports: [TuiHeader, TuiTitle, TuiTextfield, FormsModule, TuiButton, TuiIcon],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {
  public search = '';
  public isVisible = false;

  public onClick(inputRef: HTMLInputElement): void {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      inputRef.focus();
    }
  }
}
