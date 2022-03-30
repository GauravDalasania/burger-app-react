import { dcrItemContext, incItemContext } from "./../../App";
import { useContext } from "react";

const ItemControl = ({ itemName, itemCount }) => {
	const dcrItem = useContext(dcrItemContext);
	const incItem = useContext(incItemContext);

	return (
		<div className={itemName + "-container bgItem"}>
			<span className="title"> {itemName} </span>
			<button
				className={(itemCount == 0 ? "disabled " : "") + itemName + " decrement-btn btn"}
				onClick={() => dcrItem(itemName)}
			>
				Less
			</button>
			<button className={itemName + " increment-btn btn"} onClick={() => incItem(itemName)}>
				More
			</button>
		</div>
	);
};

export default ItemControl;
