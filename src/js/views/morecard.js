import React from "react";
import { Link } from "react-router-dom";
import "../../styles/testview.scss";
import { Navbar } from "../component/navbar";

function MoreCard() {
	return (
		<>
			<Navbar />
			<div className="card">
				<div className="card-body">
					<h1 className="card-title text-center">(D/W/M/Y) (index+1)</h1>
					<p className="card-text">
						this text will say whatever the value of the specified todo that was clicked on is
					</p>
					<div className="d-flex justify-content-around">
						<a href="#" className="card-link">
							<i className="fas fa-chevron-left" />
						</a>
						<a href="#" className="card-link">
							<i className="fab fa-xing" />
						</a>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="myButton">Back home</button>
			</Link>
		</>
	);
}

export default MoreCard;
