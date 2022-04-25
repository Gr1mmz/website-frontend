// //blog/index.tsx
// export type PostData = {
//   post: PostType
// }
// export type PostType = {
//   result: PostProperties
// }
// //postsList
// export interface IPostData {
//   posts: Array<PostData>
// }
// //postItem, [id]
// export interface IPostItem {
//   post: PostProperties
// }
//
// export type PostContentType = {
//   tag: string,
//   children: Array<string>,
//   attrs?: Array<object>
// }
// //api nodeToDom fn
// export type NodeType = {
//   tag: string,
//   attrs: Array<string>,
//   childs: string
// }
//
// export type PostProperties = {
//   author_name: string,
//   author_url: string,
//   content: Array<PostContentType>,
//   description: string,
//   path: string,
//   title: string,
//   url: string,
//   views: number
// }

export interface IPostType {
  post: {
    id: number,
    author_name: string,
    title: string,
    createdAt: string,
    description: string,
    slug: string,
    content: string
  }
}

export type PostsType = {
  id: number,
  author_name: string,
  title: string,
  createdAt: string,
  description: string,
  slug: string,
  content: string
}

export interface IBlog {
  posts: Array<PostsType>
}