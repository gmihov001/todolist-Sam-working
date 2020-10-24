import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

class Monthly extends React.Component {
	constructor() {
		super();
		this.state = {
			monthly: []
		};
	}

	addMonthly = e => {
		if (e.keyCode === 13) {
			this.setState({
				monthly: this.state.monthly.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteMonthly = i => {
		var newTodos = this.state.monthly.filter((value, ind) => ind !== i);
		this.setState({ monthly: newTodos });
	};

	render() {
		return (
			<>
				<Navbar />
				<div className="container mt-5 col-4 text-center">
					<div className="header">MONTHLY</div>
					<ul>
						<li className="inputField">
							<textarea
								placeholder="Stop being lazy and JUST DO IT!"
								type="text"
								onKeyUp={e => this.addMonthly(e)}
							/>
						</li>
						{this.state.monthly.map((td, i) => (
							<li key={i} className="todoList">
								<textarea
									type="text"
									value={td}
									onChange={e => {
										this.setState({
											monthly: this.state.monthly.map((t, ind) => {
												if (ind === i) {
													return e.target.value;
												} else {
													return t;
												}
											})
										});
									}}
								/>
								<div onClick={() => this.deleteMonthly(i)} className="deleteX">
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
export default Monthly;
