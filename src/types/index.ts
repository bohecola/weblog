interface IUserInfo {
  username: string,
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

export {
  IUserInfo,
  IArticle
}