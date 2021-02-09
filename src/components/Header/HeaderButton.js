import React from "react";

function HeaderButton({ className, value, isSelected, isDisabled }) {
  return (
    <div
      className={
        className +
        " header-button " +
        (isDisabled && "disabled ") 
      }
    >
      {value}
    </div>
  );
}

export default HeaderButton;
