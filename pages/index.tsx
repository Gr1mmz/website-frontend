import type {NextPage} from "next";
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from "../styles/Chakra/theme";
import Head from "next/head";
import Hero from "../components/HomePage/Hero/Hero";
import About from "../components/HomePage/About/About";
import Portfolio from "../components/HomePage/Portfolio/Portfolio";
import Layout from "../components/Layout/Layout";
import Blog from "../components/HomePage/BlogSection/Blog";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Михаил | Веб-разработчик из Иркутска</title>
        <meta name="description" content="Михаил | Веб-разработчик из Иркутска"/>
        <meta property="og:image" content="https://sun9-56.userapi.com/impg/pvf7unX7JbR3mVO73tvDT85AtZfGY7TRNcg6Nw/Q4nXPLlxW8Q.jpg?size=1440x1086&quality=96&sign=fabf8ba907e815adef8e10e19198a81c&type=album" />
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
