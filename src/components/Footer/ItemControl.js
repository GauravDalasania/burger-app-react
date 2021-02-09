import React, { Component } from "react";
import BurgerControlButtons from "./BurgerControlButtons";
import { itemContext } from "./../../App";

class ItemControl extends Component {
  constructor() {
    super();
  }

  render() {
    const { itemName } = this.props;
    return (
      <div className={itemName + "-container bgItem"}>
        <span className="title"> {itemName} </span>
        <itemContext.Consumer>
          {(value) => (
            <BurgerControlButtons
              itemName={itemName}
              itemCount={value.filter(
                (item) => item.itemName == itemName && item.count
              )}
            />
          )}
        </itemContext.Consumer>
      </div>
    );
  }
}

export default ItemControl;
