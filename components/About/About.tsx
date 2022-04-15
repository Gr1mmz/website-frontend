import React from "react";
import {Box, Container, Heading, Text, Flex, Accordion, AccordionItem, AccordionButton,
    AccordionPanel, AccordionIcon, Stat, StatLabel, StatNumber, StatHelpText,
    Tag, TagLeftIcon, TagLabel, Divider, useColorMode} from "@chakra-ui/react";
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGit, FaFigma} from "react-icons/fa";
import {SiRedux, SiWebpack, SiNextdotjs, SiSass, SiTypescript, SiAdobephotoshop, SiWebstorm} from "react-icons/si";


const About = () => {
    const {colorMode} = useColorMode();
    const accordionBorderColor = colorMode === "dark" ? "whiteAlpha.500" : "blackAlpha.500";
    const tagBackgroundColor = colorMode === "dark" ? "gray.600" : "gray.300";
    return (
        <Box
            as="section"
            py="4em"
            bg="blackAlpha.100"
            id="about"
        >
            <Container maxW="container.lg">
                <Heading as="h2"
                         textAlign="center"
                         mb="1em"
                         fontSize="2.5em"
                >
                    Обо мне
                </Heading>
                <Box
                    bg="blackAlpha.300"
                    p="1.5em"
                >
                    <Text textAlign="justify">
                        Привет. Меня зовут Михаил. Мне 26 лет. Я из города Иркутск. Того самого, что рядом с Байкалом.
                        Веб-разработкой я увлекаюсь уже более двух лет. Изначально мне было просто интересна тема
                        создания сайтов и то, как они устроены изнутри. Позже это увлечение переросло в желание
                        создавать какие-то продукты, будь то какое-то веб-приложение или просто красивая кнопка на
                        сайте.
                        Ниже вы сможете ознакомиться с моими работами и выбрать удобный способ связи со мной.
                    </Text>
                </Box>
                <Flex
                    mt="1.5em"
                    gap="2em"
                    justifyContent="space-between"
                    flexDirection="row"
                    sx={{
                        "@media screen and (max-width: 768px)": {
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
                            Образование
                        </Heading>
                        <Accordion allowMultiple mt="1em">
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box
                                            flex="1"
                                            textAlign="left"
                                        >
                                            Высшее образование
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel><b>Магистратура</b>. Иркутский национальный исследовательский
                                            технический университет</StatLabel>
                                        <StatNumber>Корпоративные информационные системы и технологии</StatNumber>
                                        <StatHelpText>2017 - 2019</StatHelpText>
                                    </Stat>
                                    <Divider my="1em" borderColor={accordionBorderColor}/>
                                    <Stat>
                                        <StatLabel><b>Бакалавриат</b>. Иркутский национальный исследовательский
                                            технический университет</StatLabel>
                                        <StatNumber>Информационная безопасность</StatNumber>
                                        <StatHelpText>2013 - 2017</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            HTML Academy
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Онлайн курсы</StatLabel>
                                        <StatNumber>Онлайн-тренажер по верстке</StatNumber>
                                        <StatHelpText>2020</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            Udemy
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Онлайн курс</StatLabel>
                                        <StatNumber>JavaScript разработчик</StatNumber>
                                        <StatHelpText>2021</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            IT-KAMASUTRA
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Онлайн курс</StatLabel>
                                        <StatNumber>Путь самурая</StatNumber>
                                        <StatHelpText>2021</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                    <Box flex="1">
                        <Heading
                          as="h3"
                          fontSize="1.2em"
                          textAlign="center"
                        >
                            Опыт работы
                        </Heading>
                        <Accordion allowMultiple mt="1em">
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box
                                          flex="1"
                                          textAlign="left"
                                        >
                                            Специалист по информационной безопасности
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Иркутский национальный исследовательский
                                            технический университет</StatLabel>
                                        <StatNumber>Специалист по информационной безопасности</StatNumber>
                                        <StatHelpText>2018 - 2019</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            Руководитель IT-отдела
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Министерство образования Иркутской области</StatLabel>
                                        <StatNumber>Руководитель IT-отдела</StatNumber>
                                        <StatHelpText>2019-2020</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            Координатор проектов
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>АНО Диалог-регионы</StatLabel>
                                        <StatNumber>Координатор проектов</StatNumber>
                                        <StatHelpText>2020-н.в.</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem borderColor={accordionBorderColor}>
                                <h4>
                                    <AccordionButton _focus={{boxShadow: "0 0 0 3px rgba(49,151,149, 0.6)"}}>
                                        <Box flex="1" textAlign="left">
                                            Стартап
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h4>
                                <AccordionPanel pb={4}>
                                    <Stat>
                                        <StatLabel>Участие в стартапе по разработке образовательной платформы</StatLabel>
                                        <StatNumber>Frontent-разработчик</StatNumber>
                                        <StatHelpText>2022-н.в</StatHelpText>
                                    </Stat>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Flex>
                <Box mt="1.5em">
                    <Heading
                      as="h3"
                      fontSize="1.2em"
                      textAlign="center">
                        Навыки
                    </Heading>
                    <Box mt="1em">
                        <Flex
                          gap="0.5em"
                          wrap="wrap"
                          justifyContent="center">
                            <Tag variant="subtle"
                                 bg={tagBackgroundColor}
                                 p="0.5em"
                            >
                                <TagLeftIcon boxSize="1.5em"
                                             as={FaHtml5}
                                             color="#E64C18"
                                />
                                <TagLabel>HTML</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={tagBackgroundColor}
                                 p="0.5em">
                                <TagLeftIcon boxSize="1.5em" as={FaCss3Alt}
                                             color={"#2196F3"}/>
                                <TagLabel>CSS</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiSass}
                                             color={"#cd6699"}/>
                                <TagLabel>SASS/SCSS</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={FaJsSquare}
                                             color={"#FFDF00"}/>
                                <TagLabel>JavaScript</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={FaReact}
                                             color={"#5ADAFD"}/>
                                <TagLabel>React</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiRedux}
                                             color={"#764abc"}/>
                                <TagLabel>Redux</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiWebpack}
                                             color={"#764abc"}/>
                                <TagLabel>Webpack</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiNextdotjs}
                                             color={"black"}/>
                                <TagLabel>Next.JS</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiTypescript}
                                             color={"#2f72bc"}/>
                                <TagLabel>TypeScript</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={FaGit}
                                             color={"#e44c30"}/>
                                <TagLabel>Git</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={FaFigma}
                                             color={"black"}/>
                                <TagLabel>Figma</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiAdobephotoshop}
                                             color={"#001d33"}/>
                                <TagLabel>Photoshop</TagLabel>
                            </Tag>
                            <Tag variant="subtle"
                                 bg={colorMode === "dark" ? "gray.600" : "gray.300"}
                                 p={"0.5em"}>
                                <TagLeftIcon boxSize="1.5em" as={SiWebstorm}
                                             color={"#0babcc"}/>
                                <TagLabel>WebStorm</TagLabel>
                            </Tag>
                        </Flex>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;