// import { HttpClient } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class BlogService {
  private _baseUrl = 'https://frontend-api-test-nultien.azurewebsites.net'

  constructor(private _httpClient: HttpClient) {}

  public getBlogPosts() {
    return this._httpClient.get(`${this._baseUrl}/api/BlogPosts`)
  }
}
