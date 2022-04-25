import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import NextLink from "next/link";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {theme} from "../../../styles/Chakra/theme";
import {Box, Button, ColorModeScript, Container, Divider, Flex, Heading, Icon, Link, Tag, Text,
  useColorModeValue} from "@chakra-ui/react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Layout from "../../../components/Layout/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IPostType, PostsType} from "../../../config/types";

const Post: NextPage<IPostType> = ({post}) => {
  const router = useRouter();
  const postBg = useColorModeValue("blackAlpha.100", "blackAlpha.300");
  const bqBg = useColorModeValue("blackAlpha.300", "blackAlpha.500");
  const bqBorder = useColorModeValue("blackAlpha.500", "whiteAlpha.500");
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title}/>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Layout>
        <Box as="main" p="6em 0 4em 0">
          <Container maxW="container.lg" textAlign="center">
            <Flex className="blog__post" flexDirection="column" p="1.5em" textAlign="left" bg={postBg}
                  borderRadius="lg">
              <Tag alignSelf="flex-start" bg={bqBg}>{post.createdAt}</Tag>
              <Heading as="h2" mb="1em">{post.title}</Heading>
              <ReactMarkdown
                components={{
                  pre({children}: any) {
                    // @ts-ignore
                    return (
                        <SyntaxHighlighter style={darcula} language={"javascript"} showLineNumbers>
                          {children[0]?.props.children}
                        </SyntaxHighlighter>
                    )
                  },
                  code({children}) {
                    return (
                      <Tag>
                        <code>
                          {children[0]}
                        </code>
                      </Tag>
                    )
                  },
                  a(props) {
                    return <Link href={props.href} target="_blank" rel="noreferrer">{props.children}</Link>
                  },
                  blockquote(props) {
                    return (
                      <Box bg={bqBg} p="1em 1em 1em 2em" borderLeft="0.5em solid" borderColor={bqBorder} m="0.5em 0 0 0">
                        {props.children}
                      </Box>
                    )
                  },
                  p(props) {
                    return <Text>{props.children}</Text>
                  }
                }}>
                {post.content}
              </ReactMarkdown>
              <Divider mt="1em" bg={bqBg}/>
              <Box mt="1em" textAlign="justify">
                {`Не забудь подписаться на мой телеграм-канал, в котором я выкладываю полезные материалы для фронтенд-разработчиков: `}
                <NextLink href="https://t.me/baikalFront" passHref>
                  <Link target="_blank">{"https://t.me/baikalFront"}</Link>
                </NextLink>
              </Box>
            </Flex>
            <Flex mt="2em" justifyContent="space-between" gap="1em">
              <Button as="a" variant="outline" bg={postBg} cursor="pointer" onClick={() => router.push("/blog")}
                      sx={{
                        _hover: {
                          bg: `${bqBg}`
                        }
                      }}>
                <Icon as={AiOutlineArrowLeft} mr="0.5em"/>
                Назад к постам
              </Button>
              <Button as="a" variant="outline" bg={postBg} cursor="pointer" onClick={() => router.push("/")}
                      sx={{
                        _hover: {
                          bg: `${bqBg}`
                        }
                      }}>
                На главную
              </Button>
            </Flex>
          </Container>
        </Box>
      </Layout>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  const response = await axios.get(`http://localhost:3000/api/hello`);
  const posts = await response.data.posts;
  // @ts-ignore
  paths = posts.map(post => {
    return {params: {id: post.slug}}
  });
  // console.log(paths)
  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const response = await axios.get(`http://localhost:3000/api/hello`);
  const posts = await response.data.posts;
  const gettedPost = posts.filter((post: PostsType) => {
    if (post.slug === params?.id) {
      return post;
    }
  });
  const post = gettedPost[0];
  return {
    props: {
      post
    }
  };
}