import { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ShoppingCartContext } from "../../contexts/ShoppingCarContext";

import styles from "./style.module.scss";

function Top() {
  const {
    shoppingCart
  } = useContext(ShoppingCartContext)

  useEffect(() => {
    console.log(shoppingCart)
  },[shoppingCart])

  return (
    <div className={styles.main}>
      <div className={styles.mainLimiter}>
        <h3>LogoMarca</h3>
        <div className={styles.shoppingCar}>
          <FaShoppingCart />
          <p>{shoppingCart.length}</p>
        </div>
      </div>
      <div className={styles.bar} />
    </div>
  );
}

export default Top;
