import { useContext } from "react";
import { dcrItemContext, incItemContext } from "./../../App";

function BurgerControlButtons(props) {
	const incItem = useContext(incItemContext);
	const dcrItem = useContext(dcrItemContext);

	return (
		<>
			<button
				className={(props.itemCount == 0 ? "disabled " : "") + props.itemName + " decrement-btn btn"}
				onClick={() => dcrItem(props.itemName)}
			>
				Less
			</button>

			<button className={props.itemName + " increment-btn btn"} onClick={() => incItem(props.itemName)}>
				More
			</button>
		</>
	);
}

export default BurgerControlButtons;
