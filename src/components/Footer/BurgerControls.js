import React, { useContext, useEffect, useState } from "react";
import ItemControl from "./ItemControl";
import { itemContext } from "./../../App";
import Popup from "../Shared/Popup";

function BurgerControl({ totalItems, orderPlaced }) {
  const items = useContext(itemContext);

  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(4);

  const toggleOrderPopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() =>
    setPrice(() =>
      items.reduce(
        (totalPrice, item) => totalPrice + item.price * item.count,
        4
      )
    )
  );

  const title = "Your order summary is here: ";
  const content = items;

  return (
    <div className="burger-controls">
      <div className="price-details">Current Price: $ {price}</div>
      <div className="items-container">
        {items.map((bgItem, index) => (
          <ItemControl key={index} itemName={bgItem.itemName} />
        ))}
      </div>
      <div className="order-button">
        <button
          className={
            (totalItems > 0 ? "" : "disabled") + " order order-btn btn"
          }
          onClick={toggleOrderPopup}
        >
          Order Now
        </button>
      </div>
      {isOpen && (
        <Popup
          content={content}
          title={title}
          closePopup={toggleOrderPopup}
          orderPlaced={orderPlaced}
          price={price}
        />
      )}
    </div>
  );
}

export default BurgerControl;
