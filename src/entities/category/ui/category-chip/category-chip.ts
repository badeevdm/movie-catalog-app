import { Component, input } from '@angular/core';
import { TuiChip } from '@taiga-ui/kit';
import { ICategory } from '../../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'movie-app-category-chip',
  imports: [TuiChip, RouterModule],
  templateUrl: './category-chip.html',
  styleUrl: './category-chip.less',
})
export class CategoryChip {
  public readonly category = input.required<ICategory>();
}
