import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, Observable, map } from "rxjs";
import { BlogCategoryItem, ResponseObjCategoryPost } from "../models";

@Injectable()
export class CategoryService {
  private _baseUrl = 'https://frontend-api-test-nultien.azurewebsites.net/api/Category'

  constructor(private _httpClient: HttpClient) {}

  public getCategories(): Observable<BlogCategoryItem[]> {
    return this._httpClient.get<ResponseObjCategoryPost>(this._baseUrl)
      .pipe(
        map((data) => data.resultData),
      )
  }

  public createCategory(category: BlogCategoryItem): Observable<BlogCategoryItem> {
    return this._httpClient.post(this._baseUrl, category) as Observable<BlogCategoryItem>
  }

  public updateCategory(category: BlogCategoryItem) {
    return this._httpClient.put(`${this._baseUrl}/${category.id}`, category)
  }

  public deleteCategory(id: number) {
    return this._httpClient.delete(`${this._baseUrl}/${id}`)
  }
}
