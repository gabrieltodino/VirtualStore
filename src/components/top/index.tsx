import { useContext, useState } from "react";
import styles from "./style.module.scss";

import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { ShoppingCartContext } from "../../contexts/ShoppingCarContext";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Top() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let textMessage = encodeURIComponent(
    `Hello, how are you? I'd like to buy the following product:`
  );

  return (
    <div className={styles.main}>
      <div className={styles.mainLimiter}>
        <h3>LogoMarca</h3>
        <div className={styles.shoppingCar} onClick={openModal}>
          <FaShoppingCart />
          <p>{shoppingCart.length}</p>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Shopping Cart Items"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Shopping Cart Content
          </h2>
          <div>
            {shoppingCart.map((item) => {
              return <h3 className={styles.items}>{">" + item}</h3>;
            })}
          </div>
          <button onClick={closeModal}>close</button>
          { shoppingCart.length > 0 &&
            <a
              href={`https://api.whatsapp.com/send?phone=5514996976598&text=${textMessage}`}
              target="_blank"
            >
              <p className={styles.link}>
                Buy now! <FaWhatsapp />
              </p>
            </a>
          }
        </Modal>
      </div>
      <div className={styles.bar} />
    </div>
  );
}

export default Top;
