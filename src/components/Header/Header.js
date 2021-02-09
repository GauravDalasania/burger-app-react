import React, { useContext, useState, useEffect } from "react";
import burgerLogo from "./../../assets/burger.png";
import "./../../styles/header.scss";
import HeaderButton from "./HeaderButton";

function Header({ totalItems }) {
  // const headerButtons = [
  //   {
  //     id: 1,
  //     className: "bgBuilder",
  //     value: "Burger Builder",
  //     isSelected: true,
  //     isDisabled: false,
  //   },
  //   {
  //     id: 2,
  //     className: "chkOut",
  //     value: "Checkout",
  //     isSelected: false,
  //     isDisabled: true,
  //   },
  // ];

  // const [headerBtns, setHeaderBtns] = useState(headerButtons);

  // useEffect(() => {
  //   setHeaderBtns((prevHeaderBtnsState) =>
  //     prevHeaderBtnsState.map((btn) =>
  //       btn.id !== 1
  //         ? { ...btn, isDisabled: totalItems > 0 ? false : true }
  //         : { ...btn }
  //     )
  //   );
  // }, [totalItems]);

  return (
    <>
      <div className="header" id="header">
        <div className="logo">
          <img src={burgerLogo} className="burgerLogo" />
        </div>
        <div className="header-buttons" id="header-buttons">
          {/* {headerBtns.map((btn, index) => (
            <HeaderButton
              key={index}
              className={btn.className}
              value={btn.value}
              isSelected={btn.isSelected}
              isDisabled={btn.isDisabled}
            />
          ))} */}

          <div className="bgBuilder header-button selected">Burger Builder</div>
        </div>
      </div>
    </>
  );
}

export default Header;
