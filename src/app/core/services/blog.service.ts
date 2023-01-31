import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { BlogItem, ResponseObj, ResponseObjBlogPost } from "../models";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public get searchInputChanged$(): Subject<string> {
    return this._searchInputChanged$
  }

  private _baseUrl = 'https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts'
  private _searchInputChanged$: Subject<string>

  constructor(private _httpClient: HttpClient) {
    this._searchInputChanged$ = new Subject<string>
  }

  public getBlogPosts(): Observable<BlogItem[]> {
    return this._httpClient.get<ResponseObjBlogPost>(this._baseUrl)
    .pipe(
      map((data) => data.resultData)
    )
  }

  public createBlog(blog: BlogItem): Observable<BlogItem> {
    return this._httpClient.post(this._baseUrl, blog) as Observable<BlogItem>
  }

  public updateBlog(blog: BlogItem) {
    return this._httpClient.put(`${this._baseUrl}/${blog.id}`, blog)
  }

  public deleteBlog(blog: BlogItem) {
    return this._httpClient.delete(`${this._baseUrl}/${blog.id}`)
  }
}
