import React, {useState} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {url} from "../../api/hello";

import {theme} from "../../../styles/Chakra/theme";
import {
    ColorModeScript,
    Container,
    Heading,
    Box,
    IconButton,
    Flex,
    Tag,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import Layout from "../../../components/Layout/Layout";
import {PostProps} from "../../../components/PostsList/PostsList";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`${url}posts`);
    const posts: Array<PostProps> = await response.data.data;
    const paths = posts.map(item => {
        return {params: {id: String(item.id)}}
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {data} = await axios.get(`${url}posts/${params?.id}`);

    return {
        props: {
            data,
        },
        revalidate: 1,
    };
};

const Post = ({data}: any) => {
    const [icon, setIcon] = useState(<AiOutlineHeart/>);
    const [iconColor, setIconColor] = useState("inherit");
    const onLikeClickHandler = () => {
        setIcon(<AiFillHeart/>);
        setIconColor("red");
    };
    const postBg = useColorModeValue("blackAlpha.100", "blackAlpha.300");
    return (
        <>
            <Head>
                <title>{data.data.attributes.title}</title>
                <meta name="description" content={data.data.attributes.title}/>
            </Head>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <Layout>
                <Box as="main" py="6em">
                    <Container maxW="container.lg" textAlign="center">
                        <Flex
                            className="blog__post"
                            flexDirection="column"
                            p="1.5em"
                            textAlign="left"
                            bg={postBg}
                            borderRadius="lg"
                        >
                            <Tag alignSelf="flex-start" mb="1em">
                                {data.data.attributes.date}
                            </Tag>
                            <Heading as="h2" mb="1em">
                                {data.data.attributes.title}
                            </Heading>
                            <ReactMarkdown
                                components={{
                                    code({className, children}) {
                                        const language = className?.replace("language-", "");
                                        return (
                                            <SyntaxHighlighter
                                                style={materialDark}
                                                language={language}
                                            >{children[0]}
                                            </SyntaxHighlighter>
                                        );
                                    },
                                }}
                            >
                                {data.data.attributes.body}
                            </ReactMarkdown>
                            <Box alignSelf="flex-end" mt="1em">
                                {data.data.attributes.likes}
                                <IconButton
                                    color={iconColor}
                                    variant="ghost"
                                    aria-label="like"
                                    icon={icon}
                                    onClick={() => onLikeClickHandler()}
                                />
                            </Box>
                        </Flex>
                    </Container>
                </Box>
            </Layout>
        </>
    );
};

export default Post;