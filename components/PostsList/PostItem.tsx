import React, {useState} from "react";
import NextLink from "next/link";
import {Flex, Heading, IconButton, Text, Box, Link, Tag} from "@chakra-ui/react";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {PostProps} from "./PostsList";
import {addLike} from "../../pages/api/hello";

const PostItem = ({attributes, id}: PostProps) => {
    const [icon, setIcon] = useState(<AiOutlineHeart/>);
    const [iconColor, setIconColor] = useState("inherit");
    const [likes, setLikes] = useState(attributes.likes);
    const onLikeClickHandler = () => {
        setIcon(<AiFillHeart/>);
        setIconColor("red");
        addLike(id, likes);
        setLikes(prevState => prevState + 1);
    }
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
                {attributes.date}
            </Tag>
            <Heading

                as="h3"
                fontSize="1.5em"
                noOfLines={2}
            >
                {attributes.title}
            </Heading>
            <Text noOfLines={3}>
                {attributes.description}
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
                <NextLink href={`/blog/posts/${id}`} passHref>
                    <Link color="teal.500" fontWeight="bold">читать далее...</Link>
                </NextLink>
                {/*<Box>*/}
                {/*    {likes}*/}
                {/*    <IconButton*/}
                {/*        color={iconColor}*/}
                {/*        variant="ghost"*/}
                {/*        aria-label="like"*/}
                {/*        icon={icon}*/}
                {/*        onClick={() => onLikeClickHandler()}*/}
                {/*    />*/}
                {/*</Box>*/}
            </Flex>
        </Flex>
    );
};

export default PostItem;