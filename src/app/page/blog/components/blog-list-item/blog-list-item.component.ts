import { Component, Input } from '@angular/core';
import { BlogItem } from 'src/app/core/models';


@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss']
})
export class BlogListItemComponent {
  @Input() public set blogItem(value: BlogItem) {
    this._blogItem = value
  }

  public get blogItem(): BlogItem {
    return this._blogItem
  }


  private _blogItem: BlogItem
}
