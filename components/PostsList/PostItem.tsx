import React from "react";
import NextLink from "next/link";
import {Flex, Heading, IconButton, Text, Box, Link, Tag} from "@chakra-ui/react";
import {PostContentType, PostType} from "../../config/types";

interface IPostItem {
  id: number,
  post: {
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

const PostItem: React.FC<IPostItem> = ({post, id}) => {
  return (
    <Flex flexDirection="column"
          border="1px solid gray"
          p="1em"
          textAlign="left"
          w="100%"
          gap="0.5em"
          boxShadow="md"
    >
      <Tag alignSelf="flex-start">
        {post.author_name}
      </Tag>
      <Heading
        as="h3"
        fontSize="1.5em"
        noOfLines={2}
      >
        {post.title}
      </Heading>
      <Text noOfLines={3}>
        {post.description}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href={`/blog/posts/[id]`} as={`/blog/posts/${post.path}`} passHref>
          <Link color="teal.500" fontWeight="bold">читать далее...</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default PostItem;