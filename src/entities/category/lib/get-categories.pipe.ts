import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../../category';

@Pipe({
  name: 'getCategories',
})
export class GetCategoriesPipe implements PipeTransform {
  transform(categoriyIds: string[], categories: ICategory[]): ICategory[] {
    return categoriyIds.reduce((acc, categoriyId) => {
      const category = categories.find((item) => item.id === categoriyId);

      if (!category) return acc;

      return [...acc, category];
    }, [] as ICategory[]);
  }
}
