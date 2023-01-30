import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BlogCategoryItem } from 'src/app/core/models';


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogCategoriesComponent {
  @Input() public set blogCategories(value: BlogCategoryItem[]) {
    this._blogCategories = value
  }

  public get blogCategories(): BlogCategoryItem[] {
    return this._blogCategories
  }


  private _blogCategories: BlogCategoryItem[]

  constructor() {}

}
