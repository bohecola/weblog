interface IUserInfo {
  name: string
  avatar: string
  desc: string
}

interface ICategoryListItem {
  _id: string
  name: string
  count: number
}

export {
  IUserInfo,
  ICategoryListItem
}