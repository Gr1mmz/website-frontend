import React from "react";
import NextLink from "next/link";
import {Box, Container, Flex, Heading, Link, Text} from "@chakra-ui/react";

const Blog = () => {
  return (
    <Box
      as="section"
      py="4em"
      bg="blackAlpha.100"
      id="blog"
      fontSize="1em"
    >
      <Container maxW="container.lg">
        <Heading as="h2"
                 textAlign="center"
                 mb="1em"
                 fontSize="2.5em"
        >
          Блог
        </Heading>
        <Flex
          mt="1.5em"
          gap="2em"
          justifyContent="space-between"
          flexDirection="row"
          sx={{
            "@media screen and (max-width: 568px)": {
              flexDirection: "column"
            }
          }}
        >
          <Box flex="1">
            <Heading
              as="h3"
              fontSize="1.2em"
              textAlign="center"
            >
              Telegram-канал
            </Heading>
            <Box
              bg="blackAlpha.300"
              p="1.5em"
              mt="1em"
            >
              <Text>
                У меня есть telegram-канал, в котором я периодически выкладываю полезные материалы, связанные с
                frontend-разработкой, а также делюсь своей жизнью, успехами и неудачами.
                Подпишись <NextLink href="https://t.me/baikalFront" passHref>
                  <Link color="teal.500" fontWeight="bold" target="_blank">https://t.me/baikalFront</Link>
                </NextLink>
              </Text>
            </Box>
          </Box>
          <Box flex="1">
            <Heading
              as="h3"
              fontSize="1.2em"
              textAlign="center"
            >
              Блог на сайте
            </Heading>
            <Box
              bg="blackAlpha.300"
              p="1.5em"
              mt="1em"
            >
              <Text>
                В блог на этом сайте попадают более объемные посты, которые также есть в моем telegram-канале. Почитать
                блог можно перейдя по ссылке: <NextLink href="/blog" passHref>
                <Link color="teal.500" fontWeight="bold">Блог</Link>
              </NextLink>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Blog;