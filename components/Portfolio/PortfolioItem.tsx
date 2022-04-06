import React from 'react';
import {Box, Flex, Heading, Img, Button} from "@chakra-ui/react";
import {FaGithub} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";

interface PortfolioItemProps {
    src: string,
    header: string,
    githubLink: string,
    link: string
}

const PortfolioItem: React.FC<PortfolioItemProps> =
    ({
         src,
         header,
         githubLink,
         link,
         children
     }) => {
        return (
            <Box>
                <Flex
                    gap="1em"
                    flexDirection="row"
                    justifyContent="flex"
                    sx={{
                        "@media screen and (max-width: 1024px)": {
                            flexDirection: "column",
                            justifyContent: "center"
                        }
                    }}
                >
                    <Img
                        src={src}
                        flex="1"
                        maxW="40%"
                        minW="290px"
                        alignSelf="center"
                        boxShadow="xl"
                        alt={header}
                        sx={{
                            "@media screen and (max-width: 1024px)": {
                                maxW: "60%"
                            }
                        }}
                    />
                    <Box flex="1" maxW="580px" alignSelf="center">
                        <Heading
                            as="h3"
                            fontSize="1.2em"
                            mb="0.5em"
                        >
                            {header}
                        </Heading>
                        {children}
                        <Flex
                            flexDirection="row"
                            gap="1em"
                            mt="1em"
                            flexWrap="wrap"
                        >
                            <Button
                                as="a"
                                leftIcon={<FaGithub/>}
                                variant="solid"
                                target="_blank"
                                href={githubLink}
                            >
                                Открыть на GitHub
                            </Button>
                            <Button
                                as="a"
                                rightIcon={<FiArrowRight/>}
                                variant="outline"
                                target="_blank"
                                href={link}
                            >
                                Посмотреть результат
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        );
    };

export default PortfolioItem;