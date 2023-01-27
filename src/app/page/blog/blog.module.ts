import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule } from "./blog-routing.module";
import {
  BlogCategoriesComponent,
  BlogComponent,
  BlogListItemComponent,
  BlogSearchComponent,
} from "./components";
import { HttpClientModule } from '@angular/common/http';
import { BlogService } from "src/app/core/services/blog.service";

@NgModule({
  declarations: [
    BlogComponent,
    BlogCategoriesComponent,
    BlogListItemComponent,
    BlogSearchComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    BlogService,
  ],
})
export class BlogModule {}
