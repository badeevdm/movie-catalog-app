import { Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'movie-app-header',
  imports: [TuiHeader, TuiTitle, TuiAvatar],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class Header {}
