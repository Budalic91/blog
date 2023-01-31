import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogCategoriesComponent } from './blog-categories.component';

describe('BlogCategoriesComponent', () => {
  let component: BlogCategoriesComponent
  let fixture: ComponentFixture<BlogCategoriesComponent>
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogCategoriesComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
    fixture = TestBed.createComponent(BlogCategoriesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct category name', () => {
    fixture.componentInstance.blogCategories = [
      {
        id: 1,
        name: 'Category 1'
      }
    ]

    fixture.detectChanges()
    expect(fixture.componentInstance.blogCategories[0].name).toEqual('Category 1')
  })

  it('should render the blog category name in anchor tag', () => {
    fixture.componentInstance.blogCategories = [
      {
        id: 1,
        name: 'Category 1'
      }
    ]
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('#categoryName').textContent).toContain('Category 1')
  })
  

})