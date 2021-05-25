import React from "react";
import Image from "next/image";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./style.module.scss";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={35}
    totalSlides={3}
    infinite={true}
    className={styles.carouselWrapper}
  >
    <Slider className={styles.carouselSlider}>
      <Slide index={0}>
        <Image
          width={1920}
          height={670}
          src={"/image01.jpg"}
          objectFit="cover"
        />
      </Slide>
      <Slide index={1}>
        <Image
          width={1920}
          height={670}
          src={"/image02.jpg"}
          objectFit="cover"
        />
      </Slide>
      <Slide index={2}>
        <Image
          width={1920}
          height={670}
          src={"/image03.jpg"}
          objectFit="cover"
        />
      </Slide>
    </Slider>
    <ButtonBack className={styles.carouselBackButton}>
      <IoIosArrowBack />
    </ButtonBack>
    <ButtonNext className={styles.carouselNextButton}>
      <IoIosArrowForward />
    </ButtonNext>
  </CarouselProvider>
);

export default ImageCarousel;
