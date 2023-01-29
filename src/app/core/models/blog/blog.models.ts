export interface BlogItem {
  id?: number
  title: string
  text: string
  categoryId?: number
  createdAt?: string
  updatedAt?: string
}

export interface ResponseObj {
  errorMessage: string | null
  success: boolean
}

export interface ResponseObjBlogPost extends ResponseObj{
  resultData: BlogItem[]
}
