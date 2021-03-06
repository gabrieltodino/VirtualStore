import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "../categories/style.module.scss";
import { useEffect } from "react";
import { useState } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCarContext";

interface ProductTypes {
  id: string;
  data: {
    name: string;
    category: string;
    desc: string;
    img: string;
    price: Number;
  };
}

interface CategoriesProps {
  categorie: string;
  productsTotal: ProductTypes[];
}

const CategoriesCarousel = (props: CategoriesProps) => {
  const categorie = props.categorie;
  const productsTotal = props.productsTotal;
  const [slidesCount, setSlidesCount] = useState(9);

  const { HandleAddToShoppingCart, shoppingCart } = useContext(ShoppingCartContext);

  let index = 0;

  const elementsWithCategorie = productsTotal.filter(
    (product) => product.data.category === categorie
  );

  useEffect(() => {
    setSlidesCount(Math.floor(window.innerWidth / 205));
  });

  return (
    <CarouselProvider
      totalSlides={elementsWithCategorie.length + 1}
      visibleSlides={slidesCount}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={100}
      className={styles.carouselWrapper}
      infinite
    >
      <Slider className={styles.slider}>
        {elementsWithCategorie.map((product) => {
          index++;

          return (
            <Slide
              index={index}
              key={product.id}
              className={styles.categoriesbox}
            >
              <Image
                width={250}
                height={250}
                src={product.data.img}
                alt="product card image"
                objectFit="fill"
              />
              <div className={styles.textWrapper}>
                <h2>{product.data.name}</h2>
                <p>R$ {product.data.price}</p>
                <div className={styles.categoriesBoxBottom}>
                  <Link href={`/products/${product.id}`}>Buy Now</Link>
                  <p
                    onClick={() => {
                      HandleAddToShoppingCart(product.data.name);
                    }}
                  >
                    Add to Cart
                  </p>
                </div>
              </div>
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack className={styles.carouselBackButton}>
        <IoIosArrowBack />
      </ButtonBack>
      <ButtonNext className={styles.carouselNextButton}>
        <IoIosArrowForward />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default CategoriesCarousel;
