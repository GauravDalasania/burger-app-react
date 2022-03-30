import { useContext, useEffect, useState } from "react";
import { itemContext } from "./../../App";

function BurgerContent() {
	const items = useContext(itemContext);
	const [addedItems, setAddedItems] = useState([]);

	useEffect(() => setAddedItems(items.filter((item) => item.count > 0)), items);

	return (
		<div className="bgContent">
			{addedItems.length == 0 ? (
				<div className="initial-msg">Please start adding ingredients</div>
			) : (
				addedItems.map((item) => {
					let result = [];
					for (let i = 0; i < item.count; i++) {
						result.push(<div key={item.itemName + `-${i}`} className={"item-" + item.id}></div>);
					}
					return result;
				})
			)}
		</div>
	);
}

export default BurgerContent;
