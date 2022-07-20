import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import {FaGithub} from "react-icons/fa";
import {FiArrowRight} from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <Box mt="3em">
      <Flex gap="1em" flexDirection="row" justifyContent="flex" alignItems="center"
            sx={{
              "@media screen and (max-width: 1024px)": {
                flexDirection: "column",
                justifyContent: "center"
              }
            }}>
        <Image src={data.imageSrc} maxW="40%" minW="290px" alignSelf="center" boxShadow="xl" alt={data.header}
               fit="contain" align="top" h="auto" onClick={data.slides ? onOpen : () => {}}
               sx={{
                 cursor: 'pointer',
                 "@media screen and (max-width: 1024px)": {
                   maxW: "60%"
                 }
               }}/>
        <Box maxW="580px" alignSelf="center">
          <Heading as="h3" fontSize="1.2em" mb="0.5em">{data.header}</Heading>
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

      <Modal isOpen={isOpen} onClose={onClose} size={isLargerThan1024 ? 'full' : 'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {data.slides?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image src={item}/>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PortfolioItem;