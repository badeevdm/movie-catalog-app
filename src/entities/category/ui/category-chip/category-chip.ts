import { Component, inject, input } from '@angular/core';
import { TuiChip } from '@taiga-ui/kit';
import { ICategory } from '../../models';
import { RouterModule } from '@angular/router';
import { CategoryFacade } from '../../store/category-facade.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { GetCategoriesPipe } from '../../lib';
import { TuiAppearanceOptions } from '@taiga-ui/core';

@Component({
  selector: 'movie-app-category-chip',
  imports: [TuiChip, RouterModule, GetCategoriesPipe],
  templateUrl: './category-chip.html',
  styleUrl: './category-chip.less',
})
export class CategoryChip {
  private readonly categoryFacade = inject(CategoryFacade);

  public readonly categoryIds = input.required<ICategory['id'][]>();
  public readonly appearance = input<TuiAppearanceOptions['appearance']>('neutral');

  public readonly allCategories = toSignal(this.categoryFacade.selectCategories(), {
    initialValue: [],
  });
}
