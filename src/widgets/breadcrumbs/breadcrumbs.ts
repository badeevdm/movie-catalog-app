import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiItem } from '@taiga-ui/cdk/directives/item';
import { TuiBreadcrumbs } from '@taiga-ui/kit';

interface IPathItem {
  name: string;
  link: string;
}

@Component({
  selector: 'movie-app-breadcrumbs',
  imports: [TuiBreadcrumbs, TuiItem, RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.less',
})
export class Breadcrumbs {
  public path = input.required<IPathItem[]>();
}
