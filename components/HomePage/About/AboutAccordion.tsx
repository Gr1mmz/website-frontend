import React from "react";
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box,
  Heading, Stat, StatHelpText, StatLabel, StatNumber, useColorMode
} from "@chakra-ui/react";

interface IAboutAccordion {
  data: {
    id: number,
    header: string,
    content: Array<{ btnTitle: string, title: string, helpText: string, year: string }>
  }
}

const AboutAccordion: React.FC<IAboutAccordion> = ({data}) => {
  const {colorMode} = useColorMode();
  const accordionBorderColor = colorMode === "dark" ? "whiteAlpha.500" : "blackAlpha.500";
  return (
    <Box flex="1">
      <Heading as="h3" fontSize="1.2em" textAlign="center">{data.header}</Heading>
      <Accordion allowMultiple mt="1em">
        {data.content.map(item => {
          return (
            <AccordionItem borderColor={accordionBorderColor} key={item.title}>
              <Heading as="h4">
                <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                  <Box flex="1" textAlign="left">{item.btnTitle}</Box>
                  <AccordionIcon/>
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                <Stat>
                  <StatLabel>{item.helpText}</StatLabel>
                  <StatNumber>{item.title}</StatNumber>
                  <StatHelpText>{item.year}</StatHelpText>
                </Stat>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Box>
  );
};

export default AboutAccordion;