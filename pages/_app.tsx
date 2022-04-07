import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {theme} from "../styles/Chakra/theme";
import "@fontsource/raleway/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
      </ChakraProvider>
  )
};
export default MyApp
