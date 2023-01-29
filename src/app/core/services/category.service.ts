import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs";
import { BlogCategoryItem } from "../models";

@Injectable()
export class CategoryService {
  private _baseUrl = 'https://frontend-api-test-nultien.azurewebsites.net/api/Category'

  constructor(private _httpClient: HttpClient) {}

  public getCategories() {
    return this._httpClient.get(this._baseUrl)
  }

  public createCategory(category: BlogCategoryItem) {
    return this._httpClient.post(this._baseUrl, category).pipe(
      tap((data) => console.log(data)),
      catchError((err) => err)
    )
  }

  public updateCategory(category: BlogCategoryItem) {
    return this._httpClient.put(`${this._baseUrl}/${category.id}`, category)
  }

  public deleteCategory(id: number) {
    return this._httpClient.delete(`${this._baseUrl}/${id}`)
  }
}
