import React from "react";
import { Box, Flex, Container, Heading, VStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
    const footerBg = useColorModeValue("blackAlpha.100", "gray.700");
    const date = new Date();
    const year = date.getFullYear();
    return (
        <Box
            as="footer"
            py="4em"
            bg={footerBg}
            id="about"
        >
            <Container maxW="container.lg">
                <Flex
                    justifyContent="space-between"
                    flexWrap="wrap"
                    gap="3em"
                    fontSize="0.9em"
                    sx={{
                        "@media screen and (max-width: 425px)": {
                            flexDirection: "column",
                            fontSize: "1.2em",
                            gap: "1.5em"
                        }
                    }}
                >
                    <Box>
                        <Heading
                            as="h4"
                            fontSize="1em"
                        >
                            Ссылки для связи со мной:
                        </Heading>
                        <VStack alignItems="flex-start" mt="1em">
                            <Link
                                isExternal
                                href="mailto:admin@kraevskiy-web.ru"
                                display="flex"
                                alignItems="flex-start"
                            >
                                E-mail <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://t.me/grimmz"
                                display="flex"
                                alignItems="flex-start"
                            >
                                Telegram <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://github.com/Gr1mmz"
                                display="flex"
                                alignItems="flex-start"
                            >
                                GitHub <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://vk.com/rumblesackcabbagepatch"
                                display="flex"
                                alignItems="flex-start"
                            >
                                ВКонтакте <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://www.instagram.com/mr_gr1mmz/"
                                display="flex"
                                alignItems="flex-start"
                            >
                                Россграм <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                        </VStack>
                    </Box>
                    <Box>
                        <Heading
                            as="h4"
                            fontSize="1em"
                        >
                            Сайт сделан с помощью:
                        </Heading>
                        <VStack alignItems="flex-start" mt="1em">
                            <Link
                                isExternal
                                href="https://github.com/facebook/react"
                                display="flex"
                                alignItems="flex-start"
                            >
                                React <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://nextjs.org/"
                                display="flex"
                                alignItems="flex-start"
                            >
                                Next.JS <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://chakra-ui.com/"
                                display="flex"
                                alignItems="flex-start"
                            >
                                Chakra UI <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://strapi.io/"
                                display="flex"
                                alignItems="flex-start"
                            >
                                Strapi CMS <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
                            <Link
                                isExternal
                                href="https://www.typescriptlang.org/"
                                display="flex"
                                alignItems="flex-start"
                            >
                                TypeScript <ExternalLinkIcon mx="0.3em" fontSize="0.8em"/>
                            </Link>
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