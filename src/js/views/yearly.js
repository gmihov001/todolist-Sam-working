import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

class Yearly extends React.Component {
	constructor() {
		super();
		this.state = {
			yearly: []
		};
	}

	addYearly = e => {
		if (e.keyCode === 13) {
			this.setState({
				yearly: this.state.yearly.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteYearly = i => {
		var newTodos = this.state.yearly.filter((value, ind) => ind !== i);
		this.setState({ yearly: newTodos });
	};

	render() {
		return (
			<>
				<Navbar />
				<div className="container mt-5 col-4 text-center">
					<div className="header">YEARLY</div>
					<ul>
						<li className="inputField">
							<textarea
								placeholder="Stop being lazy and JUST DO IT!"
								type="text"
								onKeyUp={e => this.addYearly(e)}
							/>
						</li>
						{this.state.yearly.map((td, i) => (
							<li key={i} className="todoList">
								<textarea
									type="text"
									value={td}
									onChange={e => {
										this.setState({
											yearly: this.state.yearly.map((t, ind) => {
												if (ind === i) {
													return e.target.value;
												} else {
													return t;
												}
											})
										});
									}}
								/>
								<div onClick={() => this.deleteYearly(i)} className="deleteX">
									<i className="fab fa-xing" />
								</div>
								<Link to="/morecard">
									<button className="myButton">more</button>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</>
		);
	}
}
export default Yearly;
