import UpperBread from "./UpperBread";
import LowerBread from "./LowerBread";
import BurgerContent from "./BurgerContent";
import "../Burger/burger.scss";

function Burger() {
	return (
		<div className="burger">
			<div className="burger-content">
				<UpperBread />
				<BurgerContent />
				<LowerBread />
			</div>
		</div>
	);
}

export default Burger;
