import React from "react";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {Box, Container, IconButton, Link, Flex, useColorModeValue} from "@chakra-ui/react";
import {FaGithub, FaVk, FaTelegram, FaHome} from "react-icons/fa";
import {ColorModeSwitcher} from "../../../styles/Chakra/ColorModeSwitcher";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const router = useRouter();
  const headerBackground = useColorModeValue("gray.50", "gray.700");
  const headerShadow = useColorModeValue("md", undefined);
  return (
    <Flex as="header" alignItems="center" position="fixed" height="55px" zIndex="10" width="100%" fontSize="1em"
          bg={headerBackground} boxShadow={headerShadow}
          sx={{
            "@media screen and (max-width: 500px)": {
              fontSize: "1.5em"
            }
          }}>
      <Container display="flex" alignItems="center" justifyContent="space-between" maxW="container.xl" gap="0.5em">
        <Flex gap="0.5em">
          <Box display="block"
               sx={{
                 "@media screen and (min-width: 501px)": {
                   display: "none"
                 }
               }}>
            <MobileMenu/>
          </Box>
          <IconButton justifySelf="flex-start" aria-label="Главная" variant="ghost" icon={<FaHome/>}
                      fontSize="1em" onClick={() => router.push("/")}/>
          <Flex alignItems="center" justifyContent="space-between" gap="1em"
                sx={{
                  "@media screen and (max-width: 500px)": {
                    display: "none"
                  }
                }}>
            <NextLink href="/#about" passHref>
              <Link>Обо мне</Link>
            </NextLink>
            <NextLink href="/#portfolio" passHref>
              <Link>Портфолио</Link>
            </NextLink>
            <NextLink href="/blog" passHref shallow={true}>
              <Link>Блог</Link>
            </NextLink>
          </Flex>
        </Flex>
        <Flex gap="0.5em">
          <IconButton as="a" href="https://github.com/Gr1mmz" target="_blank" aria-label="Github" variant="ghost"
                      icon={<FaGithub/>} fontSize="1em"/>
          <IconButton as="a" href="https://t.me/gr1mmz" target="_blank" aria-label="Telegram" variant="ghost"
                      icon={<FaTelegram/>} fontSize="1em"/>
          <IconButton as="a" href="https://vk.com/rumblesackcabbagepatch" target="_blank" aria-label="VK"
                      variant="ghost"
                      icon={<FaVk/>} fontSize="1em"/>
          <ColorModeSwitcher/>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;