import { GetStaticPaths, GetStaticProps } from "next";

import { firestore } from "../../services/firebase";

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
  
  return (<div><p>{products.data.name}</p></div>);
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  
  //const docRef = ;

  let product = {};

  await(async () => {
    // @ts-ignore:
    await firestore.collection("products").doc(slug).get().then((doc) => {
      product = {
        id: doc.id,
        data: doc.data(),
      };
    });
  })();

  return {
    props: {
      products: product,
    },
    revalidate: 60 * 5, //5 minutes
  };
};
