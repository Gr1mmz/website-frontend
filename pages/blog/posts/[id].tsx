import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import NextLink from "next/link";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {theme} from "../../../styles/Chakra/theme";
import {
  Box,
  Button,
  ColorModeScript,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Tag,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {IBlogData, IPostData} from "../../../config/types";
import Layout from "../../../components/Layout/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";

const Post: NextPage<IPostData> = ({data}) => {
  const router = useRouter();
  const post = data.data.attributes;
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
              <Tag alignSelf="flex-start" bg={bqBg}>{post.date}</Tag>
              <Heading as="h1" mb="1em">{post.title}</Heading>
              <ReactMarkdown
                components={{
                    code({node, inline, className, children, ...props}) {
                      const match = /language-(\w+)/.exec(className || '')
                      return !inline && match ? (
                        <SyntaxHighlighter style={darcula} language={match[1]} PreTag="div" {...props}>
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          <Tag color="#EB4433">
                            <code>
                              {children[0]}
                            </code>
                          </Tag>
                        </code>
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
                  },
                  h2(props) {
                      return (
                        <Heading as="h2" fontSize="1.5em">{props.children}</Heading>
                      )
                  },
                  h3(props) {
                    return (
                      <Heading as="h3" fontSize="1.25em">{props.children}</Heading>
                    )
                  }
                }}>
                {post.body}
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
  const response = await axios.get(`https://warm-plains-44935.herokuapp.com/api/posts?sort[0]=id`);
  const posts: IBlogData = await response.data;
  // @ts-ignore
  const paths = posts.data.map(item => {
    return {params: {id: String(item.id)}}
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {data} = await axios.get(`https://warm-plains-44935.herokuapp.com/api/posts/${params?.id}`);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
};