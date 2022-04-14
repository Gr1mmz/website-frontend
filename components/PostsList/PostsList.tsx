import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";
import {PostData} from "../../config/types";

interface IPostsList {
  posts: Array<PostData>
}

const PostsList: React.FC<IPostsList> = ({posts}) => {
  return (
    <Flex
      gap="2em"
      my="2em"
      direction="column-reverse"
    >
      {posts
          ? posts.map(post => <PostItem key={post.id} id={post.id} post={post.data.result}/>)
          : <Heading as="h3">Постов пока нет</Heading>}
    </Flex>
  );
};

export default PostsList;