import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, skip } from 'rxjs';
import { BlogCategoryItem, BlogItem, ResponseObjBlogPost, ResponseObjCategoryPost } from 'src/app/core/models';
import { BlogService } from 'src/app/core/services/blog.service';
import { CategoryService } from 'src/app/core/services/category.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogComponent } from './blog.component';



describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let mockBlogService: jasmine.SpyObj<BlogService>
  let mockCategoryService: jasmine.SpyObj<CategoryService>
  let categories: BlogCategoryItem[] = [
    {
      id: 1,
      name: 'Category 1'
    },
    {
      id: 2,
      name: 'Category 2'
    },
    {
      id: 3,
      name: 'Category 3'
    }
  ]
  let blogItems: BlogItem[] = [
    {
      id: 1,
      title: 'Title test',
      text: 'Text test',
      categoryId: 1,
      createdAt: '10:00:00',
      updatedAt: '11:00:00',
    }
  ]
  let getBlogPostsResponse: ResponseObjBlogPost = {
    errorMessage: '',
    resultData: blogItems,
    success: true,
  }

  let getCategoryResponse: ResponseObjCategoryPost = {
    errorMessage: '',
    resultData: categories,
    success: true,
  }



  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [SharedModule],
      providers: [{ provide: BlogService, useValue: mockBlogService }, { provide: CategoryService, useValue: mockCategoryService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should return data from service function', (async() => {
  //   mockCategoryService = jasmine.createSpyObj(['getCategories'])
  //   mockCategoryService.getCategories.and.returnValue(of(getCategoryResponse))
  //   mockBlogService = jasmine.createSpyObj(['getBlogPosts', 'searchInputChanged$'])
  //   mockBlogService.getBlogPosts.and.returnValue(of(getBlogPostsResponse))
  //   mockBlogService.searchInputChanged$.next('title')

  // }))

  // it('should render the hero name in an anchor tag', () =>{
  //   fixture.componentInstance.blogCategories = [
  //     {
  //       id: 1,
  //       name: 'Category 1'
  //     },
  //     {
  //       id: 2,
  //       name: 'Category 2'
  //     },
  //     {
  //       id: 3,
  //       name: 'Category 3'
  //     }
  //   ];
  //   fixture.detectChanges();
  //   expect(fixture.nativeElement.querySelector('app-blog-categories').textContent).toContain('Category 1');
  //    })

});
