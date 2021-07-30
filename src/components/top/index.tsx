import { useContext, useState } from "react";
import styles from "./style.module.scss";

import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
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

  let subtitle, bottomDiv, link, closeButton;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    subtitle.style.marginBottom = '15px';
    
    bottomDiv.style.display = 'flex';
    bottomDiv.style.width = '100%';
    bottomDiv.style.alignItems = 'center';
    bottomDiv.style.justifyContent = 'space-evenly';
    bottomDiv.style.marginTop = '15px';

    closeButton.style.display = 'flex';
    closeButton.style.alignItems = 'center';
    closeButton.style.backgroundColor = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '1.75rem';
    closeButton.style.border = 'none';
    closeButton.style.color = '#970000';
    
    if(shoppingCart.length > 0) {
      link.style.backgroundColor = '#25D366';
      link.style.padding = '8px';
      link.style.borderRadius = '10px';
      link.style.minWidth = '130px';
      link.style.maxWidth = '180px';
      link.style.display = 'flex';
      link.style.alignItems = 'center';
      link.style.justifyContent = 'space-between';
      link.style.color = '#fff';
      link.style.fontSize = '1.1rem';
      link.style.fontWeight = 'bold';
      link.style.cursor = 'pointer';
    }
  }


  let textMessage = encodeURIComponent(
    `Hello, how are you? I'd like to buy the following product${shoppingCart.length > 0 && 's'}: ${
      shoppingCart.map((item) => {
        return `${item}`
      })
    }`
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
          onAfterOpen={afterOpenModal}
          style={customStyles}
          contentLabel="Shopping Cart Items"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Shopping Cart Content
          </h2>
          <div>
            {shoppingCart.map((item) => {
              return <h3>{">" + item}</h3>;
            })}
          </div>
          <div ref={(_bottomDiv) => (bottomDiv = _bottomDiv)}>
            {shoppingCart.length > 0 && (
              <a
                href={`https://api.whatsapp.com/send?phone=5514996976598&text=${textMessage}`}
                target="_blank"
              >
                <p ref={(_link) => (link = _link)}>
                  Buy now! <FaWhatsapp />
                </p>
              </a>
            )}
            <button onClick={closeModal} ref={(_closeButton) => (closeButton = _closeButton)}>
              <AiOutlineClose />
            </button>
          </div>
        </Modal>
      </div>
      <div className={styles.bar} />
    </div>
  );
}

export default Top;
