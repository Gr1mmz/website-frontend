import React from "react";
import Head from "next/head";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {theme} from "../../../styles/Chakra/theme";
import {
  ColorModeScript,
  Container,
  Heading,
  Box,
  Flex,
  Tag,
  Link,
  Text,
  Button,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import Layout from "../../../components/Layout/Layout";
import {useRouter} from "next/router";
import {getPostBaseUrl} from "../../../config/config";
import {PostContentType} from "../../../config/types";
import {NodeHtmlMarkdown} from 'node-html-markdown';
import NextLink from "next/link";
import {FaRegEye} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";

interface IPost {
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

const Post: React.FC<IPost> = ({post}) => {
  const router = useRouter();
  const postBody = post.content.map((item, index) => {
    if (index < post.content.length - 1) {
      if (item.tag === "hr") {
        return <hr/>
      }
      if (item.tag === "figure") {
        // @ts-ignore
        return <img src={`https://telegra.ph/${item.children[0].attrs.src}`}/>
      }
      if (item.children.length > 2) {
        const newEl = item.children.map(el => {
          if (typeof el === "string") {
            return el;
          }
          if (typeof el === "object") {
            // @ts-ignore
            if (el.tag === "a") {
              // @ts-ignore
              return `<a {...el.attrs}>${el.children}</a>`
            }
          }
        })
      }
      if (item.tag === "pre") {
        return <code>{item.children}</code>
      }
      return `<${item.tag}>${item.children.join("")}</${item.tag}>`
    }
    return null
  }).join("");
  //.join("")
  console.log(postBody);
  const postBodyMarkdown = NodeHtmlMarkdown.translate(postBody);
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
            <Flex
              className="blog__post"
              flexDirection="column"
              p="1.5em"
              textAlign="left"
              bg={postBg}
              borderRadius="lg"
            >
              <Tag alignSelf="flex-start" mb="1em" as="a" href={post.author_url}>
                {post.author_name}
              </Tag>
              <Heading as="h2" mb="1em">
                {post.title}
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
                  a(props) {
                    return (
                      <Link href={props.href} target="_blank" rel="noreferrer">
                        {props.children}
                      </Link>
                    )
                  },
                  blockquote(props) {
                    return (
                      <Box
                        bg={bqBg}
                        p="0em 1em 0em 2em"
                        borderLeft="0.5em solid"
                        borderColor={bqBorder}
                        m="0"
                      >
                        {props.children}
                      </Box>
                    )
                  },
                  p(props) {
                    return (
                      <Text>
                        {props.children}
                      </Text>
                    )
                  }
                }}
              >
                {postBodyMarkdown}
              </ReactMarkdown>
              <Box>
                {`Ссылка на оригинальную статью: `}
                <NextLink href={post.url} passHref>
                  <Link>{post.url}</Link>
                </NextLink>
              </Box>
              <Flex alignSelf="flex-end" alignItems="center" gap="0.5em" mt="1em">
                <Icon as={FaRegEye}/>
                {post.views}
              </Flex>
            </Flex>
            <Flex mt="2em" justifyContent="space-between">
              <Button
                as="a"
                variant="outline"
                bg={postBg}
                cursor="pointer"
                onClick={() => router.push("/blog")}
                sx={{
                  _hover: {
                    bg: `${bqBg}`
                  }
                }}
              >
                <Icon as={AiOutlineArrowLeft} mr="0.5em"/>
                Назад к постам
              </Button>
              <Button
                as="a"
                variant="outline"
                bg={postBg}
                cursor="pointer"
                onClick={() => router.push("/")}
                sx={{
                  _hover: {
                    bg: `${bqBg}`
                  }
                }}
              >
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

// @ts-ignore
Post.getInitialProps = async (ctx) => {
  // @ts-ignore
  const response = await axios.get(`${getPostBaseUrl}${ctx.query.id}?return_content=true`);
  const post = await response.data.result;

  return {
    post
  }
}