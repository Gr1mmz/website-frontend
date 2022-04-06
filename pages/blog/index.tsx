import {Heading, Container, Text, ColorModeScript} from "@chakra-ui/react";
import Head from "next/head";
import {GetStaticProps} from "next";
import axios from "axios";
import {url} from "../../pages/api/hello";

import {theme} from "../../styles/Chakra/theme";
import Layout from "../../components/Layout/Layout";
import BlogWallpaper from "../../components/BlogWallpaper/BlogWallpaper";
import PostsList, {PostsProps} from "../../components/PostsList/PostsList";


const Blog = ({posts}: any) => {
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
                        <PostsList posts={posts}/>
                    </Container>
                </main>
            </Layout>
        </>
    )
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
    const response = await axios.get(`${url}posts`);
    const posts: PostsProps[] = await response.data;

    return {
        props: {
            posts
        },
        revalidate: 1,
    };
};