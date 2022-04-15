import type {NextPage} from "next";
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from "../styles/Chakra/theme";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Layout from "../components/Layout/Layout";
import Blog from "../components/BlogForHome/Blog";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Михаил | Веб-разработчик из Иркутска</title>
        <meta name="description" content="Михаил | Веб-разработчик из Иркутска"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Layout>
        <main>
          <Hero/>
          <About/>
          <Portfolio/>
          <Blog/>
        </main>
      </Layout>
    </>
  )
}

export default Home
