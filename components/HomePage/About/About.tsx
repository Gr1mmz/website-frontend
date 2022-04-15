import React from "react";
import {Box, Container, Flex, Heading, Text} from "@chakra-ui/react";
import {aboutTexts} from "./aboutTexts";
import AboutAccordion from "./AboutAccordion";
import AboutTag from "./AboutTag";

const About: React.FC = () => {
  return (
    <Box as="section" py="4em" bg="blackAlpha.100" id="about">
      <Container maxW="container.lg">
        <Heading as="h2" textAlign="center" mb="1em" fontSize="2.5em">Обо мне</Heading>
        <Box bg="blackAlpha.300" p="1.5em">
          <Text textAlign="justify">{aboutTexts.about}</Text>
        </Box>
        <Flex mt="1.5em" gap="2em" justifyContent="space-between" flexDirection="row"
              sx={{
                "@media screen and (max-width: 768px)": {
                  flexDirection: "column"
                }
              }}>
          {aboutTexts.accordions.map(item => <AboutAccordion data={item} key={item.id}/>)}
        </Flex>
        <Box mt="1.5em">
          <Heading as="h3" fontSize="1.2em" textAlign="center">Навыки</Heading>
          <Box mt="1em">
            <Flex gap="0.5em" wrap="wrap" justifyContent="center">
              {aboutTexts.tags.map(item => <AboutTag data={item} key={item.label}/>)}
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;