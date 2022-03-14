import burgerLogo from "./../../assets/burger.png";
import "../Header/header.scss";

function Header() {
	return (
		<header className="header" id="header">
			<div className="logo">
				<img src={burgerLogo} className="burgerLogo" />
			</div>
			<div className="header-buttons" id="header-buttons">
				<div className="bgBuilder header-button selected">Burger Builder</div>
			</div>
		</header>
	);
}

export default Header;
