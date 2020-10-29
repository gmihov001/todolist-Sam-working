import "../../styles/home.scss";
import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
// import Monthly from "./monthly";
import Clock from "../component/clock";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="text-center homePage">Hello (user)</div>
				<div className="container text-center mt-5 clock">
					<Clock />
				</div>
			</>
		);
	}
}
export default Home;
