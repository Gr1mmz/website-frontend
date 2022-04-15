import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";
import {IPostData} from "../../../config/types";

const PostsList: React.FC<IPostData> = ({posts}) => {
  return (
    <Flex mb="2em" direction="column-reverse">
      {posts
          ? posts.map(post => <PostItem key={post.post.result.path} post={post.post.result}/>)
          : <Heading as="h3">Постов пока нет</Heading>}
    </Flex>
  );
};

export default PostsList;