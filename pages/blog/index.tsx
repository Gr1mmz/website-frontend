import {Heading, Container, Text, ColorModeScript} from "@chakra-ui/react";
import Head from "next/head";
import {GetStaticProps, NextPage} from "next";
import axios from "axios";
import {getPosts, url} from "../api/hello";
import {theme} from "../../styles/Chakra/theme";
import Layout from "../../components/Layout/Layout";
import BlogWallpaper from "../../components/BlogWallpaper/BlogWallpaper";
import PostsList from "../../components/PostsList/PostsList";
import {PostData} from "../../config/types";
import {postsUrls} from "../../config/config";
import {useEffect, useState} from "react";

const Blog: NextPage = ({posts}: any) => {
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
  // const posts: Array<PostData> = [];
  // await postsUrls.forEach(item => {
  //     axios.get(item.url)
  //         .then(response => {
  //             posts.push({
  //                 id: item.id,
  //                 data: response.data.result
  //             });
  //         });
  // });
  const posts = await getPosts();
  // console.log(posts)

  return {
    props: {
      posts
    },
    revalidate: 3600,
  };
};