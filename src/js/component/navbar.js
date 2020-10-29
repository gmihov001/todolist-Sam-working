import React from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}
	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<nav className="mx-5 navbar d-flex justify-content-between">
				<Link to="/">
					<span className="navbar-brand homeSym">
						<i className="fas fa-home" />
					</span>
				</Link>
				<Link to="/daily">
					<span className="navbar-brand">DAY</span>
				</Link>
				<Link to="/weekly">
					<span className="navbar-brand">WEEK</span>
				</Link>
				<Link to="/monthly">
					<span className="navbar-brand">MONTH</span>
				</Link>
				<Link to="/yearly">
					<span className="navbar-brand">YEAR</span>
				</Link>
				<div className="dropdown" onClick={this.toggleOpen}>
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true">
						Dropdown
					</button>
					<div className={menuClass} aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#nogo">
							Item 1
						</a>
						<a className="dropdown-item" href="#nogo">
							Item 2
						</a>
						<a className="dropdown-item" href="#nogo">
							Item 3
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
