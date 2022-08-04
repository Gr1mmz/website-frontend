import React from 'react';
import {Box, Flex, Heading, Image, Button, Text} from '@chakra-ui/react';
import {FaGithub} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

interface PortfolioItemProps {
  data: {
    header: string,
    imageSrc: string,
    slides?: Array<string>;
    link?: string,
    githubLink: string,
    description: string,
    instruments: string,
    features: string,
  }
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({data}) => {

  return (
    <Box mt="3em">
      <Flex gap="1em"
            flexDirection="column"
            justifyContent="flex"
            alignItems="center"
            sx={{
              "@media screen and (max-width: 1024px)": {
                flexDirection: "column",
                justifyContent: "center"
              }
            }}
      >
        <Heading as="h3" fontSize="1.5em" mb="0.5em">{data.header}</Heading>
        <Box
          maxW="80%"
          alignSelf="center"
          h="auto"
        >
          {data.slides
            ?
            <Swiper
              modules={[Pagination, Zoom]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              zoom={true}
              style={{
                color: '#fff'
              }}
            >
              {data.slides?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper-zoom-container">
                      <Image src={item} boxShadow="xl"/>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            :
            <Image
              src={data.imageSrc}
            />
          }

        </Box>
        <Box>
          <Text mb="0.5em">{data.description}</Text>
          <Text mb="0.5em">
            <b>Инструменты: </b>{data.instruments}
          </Text>
          <Text>
            <b>Особенности:</b> {data.features}
          </Text>
          <Flex flexDirection="row" gap="1em" mt="1em" flexWrap="wrap">
            <Button as="a" leftIcon={<FaGithub/>} variant="solid" target="_blank" href={data.githubLink}>
              Открыть на GitHub
            </Button>
            {data.link
              ?
              <Button as="a" rightIcon={<FiArrowRight/>} variant="outline" target="_blank" href={data.link}>
                Посмотреть результат
              </Button>
              : null
            }
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PortfolioItem;