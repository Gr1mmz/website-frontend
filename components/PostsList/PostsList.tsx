import React from "react";
import {Flex, Heading} from "@chakra-ui/react";
import PostItem from "./PostItem";

export interface PostProps {
    attributes: {
        title: string,
        body: string,
        description: string,
        likes: number,
        date: string
    },
    id: number
}

export interface PostsProps {
    posts?: {
        data: Array<PostProps>,
        meta: object,
    }
}

const PostsList = ({posts}: PostsProps) => {
    return (
        <Flex
            gap="2em"
            my="2em"
            flexDirection="column-reverse"
        >
            {posts
                ? posts.data.map(post => <PostItem attributes={post.attributes} key={post.id} id={post.id}/>)
                : <Heading as="h3">Постов пока нет</Heading>}
        </Flex>
    );
};

export default PostsList;