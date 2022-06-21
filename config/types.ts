//==================================================================

//blog/index interface

export interface IBlogData {
  data: {
    data: Array<PostArray>,
    meta: object
  }
}

export interface IPostsList {
  posts: Array<PostArray>
}

export interface IPostData {
  data: {
    data: {
      attributes: PostProperties,
      id: number
    }
    meta: object
  }
}

export type PostArray = {
  id: number,
  attributes: PostProperties
}

export type PostProperties = {
  body: string,
  createdAt: string,
  date: string,
  description: string,
  likes: number,
  publishedAt: string,
  title: string,
  updatedAt: string
}

