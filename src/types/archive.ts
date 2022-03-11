import { ITag } from "./article"

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

export {
  IArchiveArticleItem,
  IArchiveMonthItem,
  IArchiveYearItem
}