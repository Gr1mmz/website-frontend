import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";
import {IBlog, PostsType} from "../../../config/types";

const PostsList: React.FC<IBlog> = ({posts}) => {
  return (
    <Flex mb="2em" direction="column-reverse">
      {posts
        ? posts.map((post: PostsType) => <PostItem key={post.id} post={post}/>)
        : <Heading as="h3">Постов пока нет</Heading>}
    </Flex>
  );
};

export default PostsList;