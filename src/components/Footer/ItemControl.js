import { Component } from "react";
import { itemContext } from "./../../App";
import BurgerControlButtons from "./BurgerControlButtons";

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
							itemCount={value.filter((item) => item.itemName == itemName && item.count)}
						/>
					)}
				</itemContext.Consumer>
			</div>
		);
	}
}

export default ItemControl;
