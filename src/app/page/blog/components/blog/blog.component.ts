import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BlogCategoryItem, BlogItem } from 'src/app/core/models';
import { BlogService } from 'src/app/core/services/blog.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { AddEditDialogComponent } from 'src/app/shared/components/add-edit-dialog/add-edit-dialog.component';
import { CategoryService } from 'src/app/core/services/category.service';
import { combineLatest, forkJoin, map } from 'rxjs'


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit{
  public get filteredBlogItems(): BlogItem[] {
    return this._filteredBlogItems
  }

  public set blogCategories(value: BlogCategoryItem[] ){
    this._blogCategories = value
  }

  public get blogCategories(): BlogCategoryItem[] {
    return this._blogCategories
  }

  private _blogItems: BlogItem[]
  private _filteredBlogItems: BlogItem[]
  private _blogCategories: BlogCategoryItem[]
  private _testBlogCategories: BlogCategoryItem[]

  constructor(
    private _blogService: BlogService,
    private _categoryService: CategoryService,
    private _dialog: MatDialog,
    private _cd: ChangeDetectorRef,
    ) {
    this._blogService.searchInputChanged$.subscribe((searchText: string) => {
      this._filteredBlogItems = this._blogItems.filter(item => item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      console.log(this._filteredBlogItems)
      this._cd.detectChanges()
    }
    )
    this._testBlogCategories = [
      {
        // id: 1,
        name: 'Category 1'
      },
      {
        // id: 2,
        name: 'Category 2'
      },
      {
        // id: 3,
        name: 'Category 3'
      }
    ]
  }

  ngOnInit(): void {
    this.getBlogPosts()
    this.getCategories()
  }

  public getBlogPosts() {
    this._blogService.getBlogPosts().subscribe((data: any )=> {
      this._blogItems = data?.resultData
      this._filteredBlogItems = JSON.parse(JSON.stringify(this._blogItems))
      this._cd.detectChanges()
    })
  }

  public getCategories() {
    this._categoryService.getCategories().subscribe((data: any) => {
      if (data?.resultData.length === 0) {
        this.initializeCategories()
      } else {
        this._blogCategories = data?.resultData
        this._cd.detectChanges()
      }
    })
  }

  public initializeCategories(): void {
    forkJoin([
      this.createCategory(this._testBlogCategories[0]),
      this.createCategory(this._testBlogCategories[1]),
      this.createCategory(this._testBlogCategories[2]),
    ])
    .subscribe((result: any ) => {
      this._cd.detectChanges()
    })
  }

  public createCategory(category: BlogCategoryItem) {
    this._categoryService.createCategory(category).subscribe(result => result)
  }

  public openModal(edit: boolean, blogItem: BlogItem | undefined = undefined) {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.disableClose = true
    const newBlog: BlogItem = {
      title: '',
      text: '',
    }

    const blog: BlogItem = blogItem ?? newBlog
    dialogConfig.panelClass = 'mat-dialog-wrapper'
    dialogConfig.hasBackdrop = false

    dialogConfig.data = {
      edit: edit,
      blog: blog,
      categories: this._blogCategories,
    }


    const dialogRef = this._dialog.open(AddEditDialogComponent, dialogConfig)

    dialogRef.afterClosed().subscribe(data => {
      if (data?.blog?.id) {
        this._blogService.updateBlog(data.blog).subscribe(data => {
          console.log(data)
          this.getBlogPosts()
        })
      } else {
        this._blogService.createBlog(data.blog).subscribe(data => {
          console.log(data)
          this.getBlogPosts()
        })
      }
    })
  }

  public editBlogItem(item: BlogItem) {
    this.openModal(true, item)
  }

  public deleteBlogItem(item: BlogItem) {
    this._blogService.deleteBlog(item).subscribe(data => {
      this.getBlogPosts()
    })
  }

}
