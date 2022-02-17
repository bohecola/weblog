interface IUserInfo {
  name: string,
  avatar: string,
  desc: string
}

interface ITag {
  name: string,
  color: string
}
interface IArticle {
  _id: string,
  title: string,
  content: string,
  author: string,
  category: string,
  tags: Array<ITag>,
  createdAt: string,
  updatedAt: string
  __v: number
}

interface IArchiveYearItem {
  year: number,
  yearList: Array<IArchiveMonthItem>
}
interface IArchiveMonthItem {
  month: number,
  monthList: Array<IArchiveArticleItem>
}
interface IArchiveArticleItem {
  _id: string,
  title: string,
  author: string,
  category: string,
  tags: Array<ITag>,
  createdAt: string,
  updatedAt: string,
  day: number
}

export {
  IUserInfo,
  IArticle,
  IArchiveYearItem
}