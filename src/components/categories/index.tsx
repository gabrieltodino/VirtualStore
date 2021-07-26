import styles from "./style.module.scss";
import CategoriesTest from '../categoriesSlider/index'

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
          <div key={dataCat} className={styles.categoriesWrapper}>
            <div className={styles.categoriesTitleWrapper}>
              <h2>{dataCat}:</h2>
            </div>
            <CategoriesTest categorie={dataCat} productsTotal={products} />
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
