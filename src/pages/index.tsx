import { GetStaticProps } from "next";
import ImageCarousel from "../components/slider";
import Top from "../components/top";
import Categories from "../components/categories";

import { firestore } from "../services/firebase";

import styles from "./home.module.scss";

interface ProductTypes {
  id: string;
  data:{
    name: String;
    category: String;
    desc: String;
    img: string;
    price: Number;
  }
}

interface MainProps {
  categories: string[];
  products: ProductTypes[];
}

export default function Home(props: MainProps) {
  return (
    <div className={styles.main}>
      <Top categories={props.categories} />
      <ImageCarousel />
      <Categories categories={props.categories} products={props.products}/> 
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = [];
  await (async () => {
    await firestore
      .collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categories.push(doc.data().title);
        });
      });
  })();

  const products = [];
  await (async () => {
    await firestore
      .collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          products.push({
            id: doc.id,
            data: doc.data(),
          });
        });
      });
  })();
  return {
    props: {
      categories: categories,
      products: products,
    },
  };
};
