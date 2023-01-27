import { Component, Input } from '@angular/core';
import { BlogCategory } from 'src/app/core/models';


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.scss']
})
export class BlogCategoriesComponent {
  @Input() public set blogCategories(value: BlogCategory[]) {
    this._blogCategories = value
  }

  public get blogCategories(): BlogCategory[] {
    return this._blogCategories
  }


  private _blogCategories: BlogCategory[]

  constructor() {
    // this._blogCategories = []
  }

}
