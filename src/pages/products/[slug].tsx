import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

import Top from "../../components/top";
import { ShoppingCartContext } from "../../contexts/ShoppingCarContext";

import { firestore } from "../../services/firebase";

import style from "./product.module.scss";

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

interface PropsType {
  products: ProductTypes;
}

export default function ProductPage({ products }: PropsType) {
  const [dataReceived, setDataReceived] = useState({});
  const [textMessage, setTextMessage] = useState("");
  const { HandleAddToShoppingCart, shoppingCart } =
    useContext(ShoppingCartContext);

  function handleDataReceived(data) {
    setDataReceived(data);
  }

  useEffect(() => {
    handleDataReceived(products);
    setTextMessage(
      encodeURIComponent(
        `Hello, how are you? I'd like to buy the following product: ${products.data.name}`
      )
    );
  }, []);

  return (
    <div>
      {dataReceived !== {} && (
        <>
          <Top />
          <div className={style.dataWrapper}>
            <Image
              width={640}
              height={670}
              src={products.data.img}
              objectFit="cover"
              className={style.image}
            />
            <div className={style.data}>
              <h1>{products.data.name}</h1>
              <h2>US$ {products.data.price}</h2>
              <div>
                <h3>Description:</h3>
                <p>{products.data.desc}</p>
              </div>

              <div className={style.bottom}>
                <a
                  href={`https://api.whatsapp.com/send?phone=5514996976598&text=${textMessage}`}
                  target="_blank"
                  className={style.linkWrapper}
                >
                  <p className={style.link}>
                    Buy now! <FaWhatsapp />
                  </p>
                </a>

                <p
                  onClick={() => {
                    HandleAddToShoppingCart(products.data.name);
                  }}
                >
                  Add to Cart
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  let product;

  async function test() {
    await firestore
      .collection("products")
      // @ts-ignore
      .doc(slug)
      .get()
      .then((doc) => {
        product = {
          id: doc.id,
          data: doc.data(),
        };
      });
  }

  await test();

  return {
    props: {
      products: product,
    },
    revalidate: 60 * 5, //5 minutes
  };
};
