import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import NextLink from "next/link";
import axios from "axios";
import {NodeHtmlMarkdown} from 'node-html-markdown';
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {theme} from "../../../styles/Chakra/theme";
import {ColorModeScript, Container, Heading, Box, Flex, Tag, Link, Text, Button, Icon, Divider,
  useColorModeValue} from "@chakra-ui/react";
import {FaRegEye} from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {getPostBaseUrl} from "../../../config/config";
import {PostContentType} from "../../../config/types";
import Layout from "../../../components/Layout/Layout";

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

type NodeType = {
  tag: string,
  attrs: Array<string>,
  childs: string
}

const Post: React.FC<IPost> = ({post}) => {
  const router = useRouter();
  const nodeToDom = (item: any) => {
    let node: NodeType = {tag: "", attrs: [], childs: ""}
    if (typeof item === "string") {
      node.childs = `${item}`;
    }
    if (item.tag) {
      if (item.attrs) {
        let attrs = [];
        for (let key in item.attrs) {
          attrs.push(`${key}="${item.attrs[key]}"`);
        }
        node.tag = item.tag;
        node.attrs = attrs;
      } else {
        node.tag = item.tag;
      }
      if (item.children) {
        let childrens = [];
        for (let i = 0; i < item.children.length; i++) {
          let child = item.children[i];
          childrens.push(nodeToDom(child));
          node.childs = childrens.join("");
        }
      }
    }
    if (item.tag === "pre") {
      return `<${item.tag}><code>${item.children[0]}</code></${item.tag}>`
    }
    if (node.tag.length > 0) {
      return `<${node.tag} ${[...node.attrs]}>${node.childs}</${node.tag}>`
    } else {
      return `${node.childs}`
    }
  };
  const postBody = post.content.map(item => {
    return nodeToDom(item);
  });
  const postBodyMarkdown = NodeHtmlMarkdown.translate(postBody.join(""));
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
              <Tag alignSelf="flex-start" as="a" href={post.author_url} bg={bqBg}>
                {post.author_name}
              </Tag>
              <Heading as="h2" mb="1em">{post.title}</Heading>
              <ReactMarkdown
                components={{
                  code({children}) {
                    return (
                      <SyntaxHighlighter
                        style={darcula}
                        language={"javascript"}
                        showLineNumbers
                      >{children[0]}
                      </SyntaxHighlighter>
                    );
                  },
                  a(props) {
                    return <Link href={props.href} target="_blank" rel="noreferrer">{props.children}</Link>
                  },
                  blockquote(props) {
                    return (
                      <Box
                        bg={bqBg}
                        p="1em 1em 1em 2em"
                        borderLeft="0.5em solid"
                        borderColor={bqBorder}
                        m="0"
                      >
                        {props.children}
                      </Box>
                    )
                  },
                  p(props) {
                    return <Text >{props.children}</Text>
                  }
                }}
              >
                {postBodyMarkdown}
              </ReactMarkdown>
              <Divider mt="1em" bg={bqBg}/>
              <Box mt="1em" textAlign="justify">
                {`Не забудь подписаться на мой телеграм-канал, в котором я выкладываю полезные материалы для фронтенд-разработчиков: `}
                <NextLink href="https://t.me/baikalFront" passHref>
                  <Link target="_blank">{"https://t.me/baikalFront"}</Link>
                </NextLink>
              </Box>
              <Flex alignSelf="flex-end" alignItems="center" gap="0.5em" mt="1em">
                <Icon as={FaRegEye}/>
                {post.views}
              </Flex>
            </Flex>
            <Flex mt="2em" justifyContent="space-between" gap="1em">
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
  // @ts-ignore
  post.content.map(item => {
    if (item.tag === "figure") {
      // @ts-ignore
      let link = `https://telegra.ph${item.children[0].attrs.src}`
      // @ts-ignore
      item.children[0].attrs.src = link;
    }
  });

  return {
    post
  }
}