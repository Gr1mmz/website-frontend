import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";
import {PostData} from "../../config/types";

interface IPostsList {
  posts: Array<PostData>
}

const PostsList: React.FC<IPostsList> = ({posts}) => {
  console.log(posts)
  return (
    <Flex
      gap="2em"
      my="2em"
      direction="column"
    >
      {posts.map(post => (<Heading as="h3">{post.data.title}</Heading>))}
      {/*{posts*/}
      {/*    ? posts.map(post => (<Heading as="h3">{post.data.title}</Heading>))*/}
      {/*    : <Heading as="h3">Постов пока нет</Heading>}*/}
      {/*{posts*/}
      {/*    ? posts.data.map(post => <PostItem attributes={post.attributes} key={post.id} id={post.id}/>)*/}
      {/*    : <Heading as="h3">Постов пока нет</Heading>}*/}
      {/*{posts}*/}
      {/*? posts.map(post => post.data.title)*/}
      {/*: <Heading as="h3">Постов пока нет</Heading>}*/}
    </Flex>
  );
};

export default PostsList;