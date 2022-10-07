export type GetPhotosParamsType = {
  page?: number
  limit?: number
}

export type ItemType = {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
  isFavourite: boolean
}
