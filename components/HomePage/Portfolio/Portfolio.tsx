import React from "react";
import {Box, Container, Heading, Flex} from "@chakra-ui/react";
import {portfolioTexts} from "./PortfolioTexts";
import PortfolioItem from "./PortfolioItem";

const Portfolio: React.FC = () => {
  return (
    <Box as="section" py="4em" id="portfolio">
      <Container maxW="container.lg">
        <Heading as="h2" textAlign="center" mb="1em" fontSize="2.5em">Портфолио</Heading>
        <Flex flexDirection="column-reverse" mt="2em">
          {portfolioTexts.map(item => <PortfolioItem data={item} key={item.header}/>)}
        </Flex>
      </Container>
    </Box>
  );
};

export default Portfolio;