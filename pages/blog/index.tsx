import {ColorModeScript, Container, Heading, Text} from "@chakra-ui/react";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import axios from "axios";
import {theme} from "../../styles/Chakra/theme";
import {IBlogData} from "../../config/types";
import Layout from "../../components/Layout/Layout";
import BlogWallpaper from "../../components/BlogPage/BlogWallpaper/BlogWallpaper";
import PostsList from "../../components/BlogPage/PostsList/PostsList";

const Blog: NextPage<IBlogData> = ({data}) => {
  const posts = data.data;
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
  const response = await axios.get(`https://warm-plains-44935.herokuapp.com/api/posts`);
  const data = await response.data;
  return {
    props: {
      data
    },
    revalidate: 3600,
  };
};