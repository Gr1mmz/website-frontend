import React from "react";
import NextLink from "next/link";
import {Flex, Heading, IconButton, Text, Box, Link, Tag} from "@chakra-ui/react";
import {IPostItem, PostContentType, PostType} from "../../../config/types";

const PostItem: React.FC<IPostItem> = ({post}) => {
  return (
    <Flex flexDirection="column" border="1px solid gray" p="1em" mt="2em" textAlign="left" w="100%"
          gap="0.5em" boxShadow="md">
      <Tag alignSelf="flex-start">
        {post.author_name}
      </Tag>
      <Heading as="h3" fontSize="1.5em" noOfLines={2}>{post.title}</Heading>
      <Text noOfLines={3}>{post.description}</Text>
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href={`/blog/posts/[id]`} as={`/blog/posts/${post.path}`} passHref>
          <Link color="teal.500" fontWeight="bold">читать далее...</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default PostItem;