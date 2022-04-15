import React from "react";
import {Box, Flex, Container, Heading, VStack, Link, Text, useColorModeValue} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {footerLinks} from "./FooterLinks";

const Footer = () => {
  const footerBg = useColorModeValue("blackAlpha.300", "gray.700");
  const year = new Date().getFullYear();
  return (
    <Box as="footer" py="4em" bg={footerBg} id="about">
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" flexWrap="wrap" gap="3em" fontSize="0.9em"
              sx={{
                "@media screen and (max-width: 425px)": {
                  flexDirection: "column",
                  fontSize: "1.2em",
                  gap: "1.5em"
                }
              }}>
          <Box>
            <Heading as="h4" fontSize="1em">Ссылки для связи со мной:</Heading>
            <VStack alignItems="flex-start" mt="1em">
              {footerLinks.left.map(item => (
                <Link isExternal href={item.url} display="flex" alignItems="flex-start" key={item.title}>
                  {item.title} <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                </Link>
              ))}
            </VStack>
          </Box>
          <Box>
            <Heading as="h4" fontSize="1em">Сайт сделан с помощью:</Heading>
            <VStack alignItems="flex-start" mt="1em">
              {footerLinks.right.map(item => (
                <Link isExternal href={item.url} display="flex" alignItems="flex-start" key={item.title}>
                  {item.title} <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                </Link>
              ))}
            </VStack>
          </Box>
        </Flex>
        <Text fontSize="1em" fontWeight="bold" mt="2em">
          &#169; Михаил Краевский, {year}
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;