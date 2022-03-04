interface IUserInfo {
  name: string
  avatar: string
  desc: string
}

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

interface IArchiveArticleItem {
  _id: string
  title: string
  author: string
  category: string
  tags: Array<ITag>
  createdAt: string
  updatedAt: string
  day: number
}

interface IArchiveMonthItem {
  month: number
  monthList: Array<IArchiveArticleItem>
}

interface IArchiveYearItem {
  year: number
  yearList: Array<IArchiveMonthItem>
}

interface ICategoryListItem {
  _id: string
  name: string
  count: number
}

export {
  IUserInfo,
  IArticle,
  IGetArticleList,
  IArchiveYearItem,
  IGetAritcleDetail,
  ICategoryDetail,
  ITagDetail,
  ICategoryListItem
}