import React from "react";
import {Tag, TagLabel, TagLeftIcon, useColorMode} from "@chakra-ui/react";

interface IAboutTag {
  data: {
    icon: any,
    color: string,
    label: string
  }
}

const AboutTag: React.FC<IAboutTag> = ({data}) => {
  const {colorMode} = useColorMode();
  const tagBackgroundColor = colorMode === "dark" ? "gray.600" : "gray.300";
  return (
    <Tag variant="subtle" bg={tagBackgroundColor} p="0.5em">
      <TagLeftIcon boxSize="1.5em" as={data.icon} color={data.color}/>
      <TagLabel>{data.label}</TagLabel>
    </Tag>
  );
};

export default AboutTag;