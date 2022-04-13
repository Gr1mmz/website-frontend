import type {NextPage} from "next";
import {ColorModeScript} from "@chakra-ui/react";
import {theme} from "../styles/Chakra/theme";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Layout from "../components/Layout/Layout";
import {useEffect} from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const data = fetch("https://api.telegra.ph/getPage/Obo-mne-Kratkaya-predystoriya-i-zachem-vse-ehto-04-12?return_content=true")
      .then(res => res.json())
      .then((data) => console.log(data))
  }, []);
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
        </main>
      </Layout>
    </>
  )
}

export default Home
