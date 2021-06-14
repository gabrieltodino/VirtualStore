import { GetStaticProps } from "next";
import ImageCarousel from "../components/slider";
import Top from "../components/top";
import Categories from "../components/categories";

import { api } from "../services/api";

import styles from "./home.module.scss";

interface ProductTypes {
    name: String;
    id: String;
    category: String;
    description: String;
    price: Number
}

interface MainProps {
  categories: string[];
  products: ProductTypes[];
}

export default function Home(props: MainProps) {
  return (
    <div className={styles.main}>
      <Top categories={props.categories}/>
      <ImageCarousel />
      <Categories categories={props.categories} products={props.products}/>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await api.get("categories", {});
  const products = await api.get("products", {});

  return {
    props: {
      categories: categories.data,
      products: products.data,
    },
  };
};
