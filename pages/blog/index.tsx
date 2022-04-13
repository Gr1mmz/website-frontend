import {Heading, Container, Text, ColorModeScript} from "@chakra-ui/react";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import axios from "axios";
import {theme} from "../../styles/Chakra/theme";
import Layout from "../../components/Layout/Layout";
import BlogWallpaper from "../../components/BlogWallpaper/BlogWallpaper";
import PostsList from "../../components/PostsList/PostsList";
import {PostData} from "../../config/types";
import {postsUrls} from "../../config/config";

interface IBlogPage {
  posts: Array<PostData>
}

const Blog: NextPage<IBlogPage> = ({posts}) => {
  console.log(posts)

  return (
    <>
      <Head>
        <title>Блог | Михаил Краевский</title>
        <meta name="description" content="Блог | Михаил Краевский"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Layout>
        <main>
          <BlogWallpaper/>
          <Container maxW="container.lg" textAlign="center">
            <Heading as="h2" mt="2em">
              Михаил Краевский. Личный блог
            </Heading>
            <Text>
              Лодырь, погромист, джаваскриптизер, инвестор
            </Text>
            {/*{console.log(posts)}*/}
            <PostsList posts={posts}/>
          </Container>
        </main>
      </Layout>
    </>
  )
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts: Array<PostData> = [];
  await Promise.all(postsUrls.map(url => axios.get(url)))
    .then(results => {
      results.forEach((result, index) => {
        posts.push({
          id: index + 1,
          data: result.data
        })
      })
    })
  return {
    props: {
      posts
    },
    revalidate: 3600,
  };
};