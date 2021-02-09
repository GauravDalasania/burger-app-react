import React from "react";

function Popup({ title, content, closePopup, price, orderPlaced }) {
  return (
    <div className="custom-popup">
      <div className="popup-box">
        <span className="title"> {title} </span> <br />
        <div className="content">
          <ul>
            {content.map((item) => (
              <li key={item.id}>
                {item.itemName} : {item.count}
              </li>
            ))}
          </ul>
          <span>
            <b>Total Price: {price}</b>
          </span>
        </div>
        <div className="popup-buttons">
          <button className="confirm popup-btn" onClick={() => orderPlaced(true)}> Confirm </button>
          <button className="cancel popup-btn" onClick={closePopup}>
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
