import React from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
			<div className="">
				<div className="dropdown">
					<button
						className="btn dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						<i className="fas fa-sign-in-alt" />
					</button>
					<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<a className="dropdown-item" href="#">
							Login/Logout
						</a>
						<a className="dropdown-item" href="#">
							Sign up
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};
