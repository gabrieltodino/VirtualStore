import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./style.module.scss";

interface TopProps {
  categories: string[];
}

function Top() {
  const [countShopping, setCountShopping] = useState(0);

  //const categories = props.categories

  return (
    <div className={styles.main}>
      <div className={styles.mainLimiter}>
        <h3>LogoMarca</h3>
        <div className={styles.shoppingCar}>
          <FaShoppingCart />
          <p>{countShopping}</p>
        </div>

        {/* <ul>
                    {
                        categories.map(data => {
                            return <li key={data}>{data}</li>
                        })
                    }
                </ul> */}
      </div>
      <div className={styles.bar} />
    </div>
  );
}

export default Top;
