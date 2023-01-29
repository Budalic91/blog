import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';



describe('AddEditDialogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero name in an anchor tag', () =>{
    fixture.componentInstance.blogCategories = [
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
    ];
    fixture.detectChanges();     
    expect(fixture.nativeElement.querySelector('app-blog-categories').textContent).toContain('Category 1');
     })

});
