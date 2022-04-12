export type PostData = {
  id: number,
  data: {
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

type PostContentType = {
  tag: string,
  children: Array<string>
}