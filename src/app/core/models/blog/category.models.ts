import { ResponseObj } from "./blog.models"

export interface BlogCategoryItem {
  id?: number
  name: string
}

export interface ResponseObjCategoryPost extends ResponseObj{
  resultData: BlogCategoryItem[]
}