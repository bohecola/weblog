interface ICategoryDetail {
  _id: string
  name: string
}

interface ITagDetail {
  _id: string
  name: string
  color: string
}

interface IGetAritcleDetail {
  _id: string
  title: string
  content: string
  author: string
  category: ICategoryDetail
  tags: Array<ITagDetail>
  createdAt: string
  updatedAt: string
}

interface ITag {
  name: string
  color: string
}

interface IArticle {
  _id: string
  title: string
  author: string
  category: string
  tags: Array<ITag>
  createdAt: string
  updatedAt: string
}

interface IGetArticleList {
  docs: Array<IArticle>
  total: number
  limit: number
  page: number
  pages: number
}

interface IGetArticleListParams {
  tagId?: null | string
  categoryId?: null | string
  page?: null | number
  limit?: null | number
}

export {
  ICategoryDetail,
  ITagDetail,
  IGetAritcleDetail,
  ITag,
  IArticle,
  IGetArticleList,
  IGetArticleListParams
}