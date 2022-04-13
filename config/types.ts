export type PostData = {
  id: number,
  data: PostType
}

export type PostContentType = {
  tag: string,
  children: Array<string>
}

export type PostType = {
  result: {
    author_name: string,
    author_url: string,
    content: Array<PostContentType>,
    description: string,
    path: string,
    title: string,
    url: string,
    views: number
  }
}