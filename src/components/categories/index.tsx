import styles from "./style.module.scss";

import Image from "next/image";
import Link from "next/link";

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

interface CategoriesProps {
  categories: string[];
  products: ProductTypes[];
}

function Categories(props: CategoriesProps) {
  const categories = props.categories;
  const products = props.products;

  return (
    <div>
      {categories.map((dataCat) => {
        return (
          <div key={dataCat}>
            <div className={styles.categoriesWrapper}>
              <h3 className={styles.categoriesTitle}>{dataCat}:</h3>
            </div>

            {products.map((dataProd) => {
              if (dataCat == dataProd.data.category) {
                return (
                  <div key={dataProd.id} className={styles.categoriestest}>
                    <Image
                      width={200}
                      height={200}
                      src={dataProd.data.img}
                      alt="product card image"
                      objectFit="fill"
                    />
                    <p>{dataProd.data.name}</p>
                    <p>{dataProd.data.price}</p>
                    <div>
                      <Link href={`/products/${dataProd.id}`}>Buy Now</Link>
                      <p>Add to Cart</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
