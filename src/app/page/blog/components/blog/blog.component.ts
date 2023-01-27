import { Component, OnInit } from '@angular/core';
import { BlogCategory, BlogItem } from 'src/app/core/models';
import { BlogService } from 'src/app/core/services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  public get blogItems(): BlogItem[] {
    return this._blogItems
  }

  public get blogCategories(): BlogCategory[] {
    return this._blogCategories
  }

  private _blogItems: BlogItem[]
  private _blogCategories: BlogCategory[]

  constructor(private _blogService: BlogService) {
    this._blogItems = [
      {
        id: 1,
        title: 'Title 1',
        text: 'Text 1',
        categoryId: 1,
      },
      {
        id: 2,
        title: 'Title 2',
        text: 'Text 2',
        categoryId: 2,
      },
      {
        id: 3,
        title: 'Title 3',
        text: 'Text 3',
        categoryId: 3,
      }
    ]
    this._blogCategories = [
      {
        id: 1,
        name: 'One'
      },
      {
        id: 2,
        name: 'Two'
      },
      {
        id: 1,
        name: 'Three'
      }
    ]
  }

  ngOnInit(): void {
    this.getPosts()
  }

  public getPosts() {
    this._blogService.getBlogPosts().subscribe(data => {
      console.log(data)
    })
  }

}
