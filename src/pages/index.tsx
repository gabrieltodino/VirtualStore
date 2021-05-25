import { GetStaticProps } from "next";
import ImageCarousel from "../components/slider";
import Top from "../components/top";

import { api } from "../services/api";

import styles from "./home.module.scss";

interface MainProps {
  categories: string[];
}

export default function Home(props: MainProps) {
  return (
    <div className={styles.main}>
      <Top categories={props.categories}/>
      <ImageCarousel />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("categories", {});

  return {
    props: {
      categories: data,
    },
  };
};
