import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import SwiperCore, {Navigation, Pagination, A11y} from "swiper"
import {Swiper, SwiperSlide} from "swiper/react"

SwiperCore.use([Navigation,Pagination,A11y])

export function  Slider() {
  return (
    <Flex
      width="100%"
      height={["250px", "450px"]}
      maxWidth="1240px"
      marginX="auto"
      marginBottom={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        autoplay={{
          delay: 4000
        }}
        style={{
          width: '100%',
          flex: 1
        }}
      >
        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImg="url(/europe.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/country/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europe
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  marginTop={["2", "4"]}
                >
                  O contonente mais  antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
            direction="column"
            bgImg="url(/europe.svg)"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/country/europe">
              <a>
                <Heading
                  fontSize={["3xl", "4xl", "5xl"]}
                  color="gray.100"
                  fontWeight="bold"
                >
                  Europe
                </Heading>
                <Text
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  fontWeight="bold"
                  marginTop={["2", "4"]}
                >
                  O contonente mais  antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}