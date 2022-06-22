import React, {useEffect} from 'react';
import {Box, Flex, Image, Heading, Center} from '@chakra-ui/react';
import text from './text';

const Hero: React.FC = () => {
  const getWords = () => {
    const words: Array<string> = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j <= text.length; j++) {
        words.push(text[Math.floor(Math.random()*text.length)])
      }
    }
    return words
  };

  return (
    <Box as="section" position='relative' sx={{overflow: 'hidden'}}>
      <Box position="absolute" fontSize="4em" color="blackAlpha.200" fontWeight="bold"
           lineHeight="1em" top='-850px' right='0'
           sx={{
             transform: 'rotate(-25deg)',
             transformOrigin: 'right top',
             width: '150%',
             minWidth: '1920px'}}>
        {getWords().map(item => (`${item} `))}
        {/*{console.log(words)}*/}
      </Box>
      <Box position="absolute" w="100%" h="100vh">
      </Box>
      <Center w="100%" h="100vh">
        <Flex
          alignItems="center"
          justifyContent="center"
          gap="2em"
          flexDirection="row"
          textAlign="right"
          position="relative"
          sx={{
            "@media screen and (max-width: 768px)": {
              flexDirection: "column-reverse",
              textAlign: "center",
              zIndex: '10'
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
    </Box>
  );
};

export default Hero;