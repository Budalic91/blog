import { Component } from '@angular/core';
import { BlogService } from 'src/app/core/services/blog.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  searchText: string
  constructor(private _blogService: BlogService) {
    this.searchText = ''
  }

  public changeSearchInput(value: any): void {
    console.log(value)
    this._blogService.searchInputChanged$.next(this.searchText)
  }
}
