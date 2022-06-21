import React from "react";
import NextLink from "next/link";
import {Flex, Heading, Link, Tag, Text} from "@chakra-ui/react";
import {PostArray} from "../../../config/types";

const PostItem: React.FC<PostArray> = ({id, attributes}) => {
  return (
    <Flex flexDirection="column" border="1px solid gray" p="1em" mt="2em" textAlign="left" w="100%"
          gap="0.5em" boxShadow="md">
      <Tag alignSelf="flex-start">
        {attributes.date}
      </Tag>
      <Heading as="h3" fontSize="1.5em" noOfLines={2}>{attributes.title}</Heading>
      <Text noOfLines={3}>{attributes.description}</Text>
      <Flex justifyContent="space-between" alignItems="center">
        <NextLink href={`/blog/posts/[id]`} as={`/blog/posts/${id}`} passHref>
          <Link color="teal.500" fontWeight="bold">читать далее...</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default PostItem;