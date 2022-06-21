import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";
import {IPostsList} from "../../../config/types";

const PostsList: React.FC<IPostsList> = ({posts}) => {
  return (
    <Flex mb="2em" direction="column-reverse">
      {posts
          ? posts.map(post => <PostItem key={post.id} attributes={post.attributes} id={post.id}/>)
          : <Heading as="h3">Постов пока нет</Heading>}
    </Flex>
  );
};

export default PostsList;