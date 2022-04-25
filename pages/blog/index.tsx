import {ColorModeScript, Container, Heading, Text} from "@chakra-ui/react";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import axios from "axios";
import {theme} from "../../styles/Chakra/theme";
import {IBlog} from "../../config/types";
import Layout from "../../components/Layout/Layout";
import BlogWallpaper from "../../components/BlogPage/BlogWallpaper/BlogWallpaper";
import PostsList from "../../components/BlogPage/PostsList/PostsList";

const Blog: NextPage<IBlog> = ({posts}) => {
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
            <Heading as="h2" mt="2em">Михаил Краевский. Личный блог</Heading>
            <Text>Лодырь, погромист, джаваскриптизер, инвестор</Text>
            <PostsList posts={posts}/>
          </Container>
        </main>
      </Layout>
    </>
  )
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/hello");
  const posts = await response.data.posts;
  return {
    props: {
      posts
    }
  }
}