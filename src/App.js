import Burger from "./components/Burger/Burger";
import BurgerControl from "./components/Footer/BurgerControls";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";

export const itemContext = React.createContext();
export const dcrItemContext = React.createContext();
export const incItemContext = React.createContext();

const burgerItems = [
	{
		itemName: "Salad",
		price: 1,
		count: 0,
		id: 1,
	},
	{
		itemName: "Tomato",
		count: 0,
		price: 2,
		id: 2,
	},
	{
		itemName: "Cheese",
		count: 0,
		price: 3,
		id: 3,
	},
	{
		itemName: "Tikki",
		count: 0,
		price: 4,
		id: 4,
	},
];

function App() {
	const [items, setItems] = useState(burgerItems);
	const [totalItems, setTotalItems] = useState(0);
	const [isOrderPlaced, setOrderPlaced] = useState(false);

	const setIsOrderPlaced = (val) => {
		setOrderPlaced(val);
	};

	useEffect(() => setTotalItems(items.reduce((total, item) => total + item.count, 0)), items);

	const incrementItem = (itemName) =>
		setItems((prevItemState) =>
			prevItemState.map((item) => (item.itemName == itemName ? { ...item, count: item.count + 1 } : item))
		);

	const decrementItem = (itemName) =>
		setItems((prevItemState) =>
			prevItemState.map((item) =>
				item.itemName == itemName && item.count > 0 ? { ...item, count: item.count - 1 } : item
			)
		);

	const reset = () => {
		setOrderPlaced(false);
		setItems(burgerItems);
	};

	return isOrderPlaced ? (
		<>
			<div className="order-placed">
				<h2>Hurrayy!!! Your Order Placed Successfully!!</h2> <br />
				<h2>Hope It taste's good!</h2>
			</div>

			<itemContext.Provider value={items}>
				<Burger />
			</itemContext.Provider>
			<span className="reset" onClick={reset}>
				back to the app
			</span>
		</>
	) : (
		<>
			<Header />
			<itemContext.Provider value={items}>
				<incItemContext.Provider value={incrementItem}>
					<dcrItemContext.Provider value={decrementItem}>
						<Burger />
						<BurgerControl totalItems={totalItems} orderPlaced={setIsOrderPlaced} />
					</dcrItemContext.Provider>
				</incItemContext.Provider>
			</itemContext.Provider>
		</>
	);
}

export default App;
