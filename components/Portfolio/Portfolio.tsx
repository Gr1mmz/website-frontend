import React from "react";
import {Box, Container, Heading, Text, Flex} from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <Box
            as="section"
            py="4em"
            id="portfolio"
        >
            <Container maxW="container.lg">
                <Heading
                    as="h2"
                    textAlign="center"
                    mb="1em"
                    fontSize="2.5em"
                >
                    Портфолио
                </Heading>
                <Flex flexDirection="column" gap="3em">
                    <PortfolioItem
                        src="./runsmart.webp"
                        header="Runsmart"
                        link="https://runsmart.kraevskiy-web.ru/"
                        githubLink="https://github.com/Gr1mmz/runsmart"
                    >
                        <Text mb="0.5em">
                            Верстка учебного макета интернет-магазина по продаже смарт-часов для бега.
                            Верстка по макету из Figma.
                        </Text>
                        <Text mb="0.5em">
                            <b>Инструменты:</b> HTML, SASS, JavaScript, Gulp, PHP Mailer
                        </Text>
                        <Text>
                            <b>Особенности:</b> Модальные окна, форма обратной связи с валидацией, Adaptive, Slider,
                            Burger
                        </Text>
                    </PortfolioItem>
                    <PortfolioItem
                        src="./portfolio.webp"
                        header="Портфолио веб-разработчика"
                        link="https://portfolio.kraevskiy-web.ru/"
                        githubLink="https://github.com/Gr1mmz/portfolio-template"
                    >
                        <Text mb="0.5em">
                            Верстка учебного макета сайта-портфолио веб-разработчика. Верстка по макету из Figma.
                        </Text>
                        <Text mb="0.5em">
                            <b>Инструменты:</b> HTML, SASS, JavaScript, Gulp
                        </Text>
                        <Text>
                            <b>Особенности:</b> Семантическая верстка, добавление страницы с политикой
                            конфиденциальности,
                            стилизация инпутов в форме обратной связи, использование миксинов и псевдоэлементов,
                            Pixel Perfect, Adaptive, Burger, CSS Grid.
                        </Text>
                    </PortfolioItem>
                    <PortfolioItem
                        src="./zlatmax.webp"
                        header="Zlatmax"
                        link="https://zlatmax.kraevskiy-web.ru/"
                        githubLink="https://github.com/Gr1mmz/zlatman"
                    >
                        <Text mb="0.5em">
                            Верстка учебного макета интернет-магазина по продаже ножей ручной работы.
                            Верстка по макету из Figma.
                        </Text>
                        <Text mb="0.5em">
                            <b>Инструменты:</b> HTML, SСSS, JavaScript, Gulp, Webpack
                        </Text>
                        <Text>
                            <b>Особенности:</b> Модальные окна, трехуровневое меню, кастомные слайдеры,
                            аккордеон, tips, адаптив без брейкпоинтов, Burger.
                        </Text>
                    </PortfolioItem>
                    <PortfolioItem
                        src="./todoreact.webp"
                        header="ToDo List React + Redux"
                        link="https://todo.kraevskiy-web.ru/"
                        githubLink="https://github.com/Gr1mmz/todoList-react-redux"
                    >
                        <Text mb="0.5em">
                            Приложение - Список дел на React с использованием библиотеки Redux.
                            Типичное CRUD-приложение, созданное с помощью React и Redux. Позволяет добавлять или
                            удалять дела, отмечать как выполненные, фильтровать по признакам. Добавлена возможность
                            работы без мышки.
                        </Text>
                        <Text mb="0.5em">
                            <b>Инструменты:</b> HTML, SСSS, JavaScript, React, Redux
                        </Text>
                        <Text>
                            <b>Особенности:</b> SPA, React, Redux
                        </Text>
                    </PortfolioItem>
                    <PortfolioItem
                        src="./movielib.webp"
                        header="Movie Library"
                        link="https://movielib.kraevskiy-web.ru/"
                        githubLink="https://github.com/Gr1mmz/mov-lib-react"
                    >
                        <Text mb="0.5em">
                            Single Page Application, созданное с помощью библиотеки React и TheMovieDataBase API.
                            На текущий момент реализована только frontend часть. Функционал - показ новых релизов
                            фильмов и популярных сейчас сериалов, поиск по жанрам, поиск по названию, отображение
                            информации о фильме на отдельной странице, показ похожих фильмов
                        </Text>
                        <Text mb="0.5em">
                            <b>Инструменты:</b> HTML, СSS (module CSS), JavaScript, React (hooks, react-router-dom,
                            HOC, axios), TMDB API
                        </Text>
                        <Text>
                            <b>Особенности:</b> SPA, React, JSX, Responsive, Preloader, CSS Grid
                        </Text>
                    </PortfolioItem>
                </Flex>
            </Container>
        </Box>
    );
};

export default Portfolio;