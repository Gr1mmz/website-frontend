import React from "react";
import {Box, Flex, Image, Heading, Center} from "@chakra-ui/react";

const Hero: React.FC = () => {
  return (
    <Center as="section" w="100%" h="100vh">
      <Flex
        alignItems="center"
        justifyContent="center"
        gap="2em"
        flexDirection="row"
        textAlign="right"
        sx={{
          "@media screen and (max-width: 768px)": {
            flexDirection: "column-reverse",
            textAlign: "center"
          }
        }}>
        <Box>
          <Heading as="h2" color="teal.500" fontSize="2em" textAlign="inherit">Привет!</Heading>
          <Heading as="h1" fontSize="2.5em" textAlign="inherit">Меня зовут Михаил</Heading>
          <Heading as="p" fontSize="1.5em" color="gray.600" textAlign="inherit">
            Я - frontend-разработчик
          </Heading>
        </Box>
        <Box>
          <Image borderRadius="full" boxSize="200px" src="./avatar.jpg" alt="Mikhail Kraevskiy"/>
        </Box>
      </Flex>
    </Center>
  );
};

export default Hero;