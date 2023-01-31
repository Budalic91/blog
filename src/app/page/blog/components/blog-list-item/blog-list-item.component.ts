import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { BlogItem } from 'src/app/core/models';


@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListItemComponent {
  public updatedDate: string
  public updatedTime: string
  @Input()
  public set blogItem(value: BlogItem) {
    this._blogItem = value
    if (value?.updatedAt) {
      const date = new Date(value?.updatedAt)
      this.updatedDate = date.toLocaleDateString()
      this.updatedTime = date.toLocaleTimeString()
    }
  }

  public get blogItem(): BlogItem {
    return this._blogItem
  }

  @Output()
  private readonly editBlogItemEmmiter: EventEmitter<BlogItem>

  @Output()
  private readonly deleteBlogItemEmmiter: EventEmitter<BlogItem>

  private _blogItem: BlogItem

  constructor() {
    this.editBlogItemEmmiter = new EventEmitter()
    this.deleteBlogItemEmmiter = new EventEmitter()
  }

  editBlogItemAction(item: BlogItem): void {
    this.editBlogItemEmmiter.emit(item)
  }

  deleteBlogItemAction(item: BlogItem): void {
    this.deleteBlogItemEmmiter.emit(item)
  }

}
