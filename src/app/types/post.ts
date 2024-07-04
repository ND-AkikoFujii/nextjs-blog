export interface Post {
  _id: string
  title: string
  eyecatch: {
    src: string
    width: number
    height: number
  }
  body: string
  slug: string
  limit: number
  skip: number
  total: number
}
