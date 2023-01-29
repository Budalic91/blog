import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BlogRoutingModule } from "./blog-routing.module";
import {
  BlogCategoriesComponent,
  BlogComponent,
  BlogListItemComponent,
  BlogContentMessageComponent,
} from "./components";
import { SharedModule } from "src/app/shared/shared.module";
import {MatIconModule} from '@angular/material/icon';
import { CategoryService } from "src/app/core/services/category.service";

@NgModule({
  declarations: [
    BlogComponent,
    BlogCategoriesComponent,
    BlogListItemComponent,
    BlogContentMessageComponent
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [
    CategoryService,
  ],
})
export class BlogModule {}
