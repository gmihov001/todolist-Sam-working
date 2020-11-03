import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

class Daily extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// addDaily = e => {
	// 	if (e.keyCode === 13) {
	// 		this.setState({
	// 			daily: this.state.daily.concat({ label: e.target.value, done: false, frequency: "daily" })
	// 		});
	// 		e.target.value = "";
	// 	}
	// };

	deleteDaily = i => {
		var newTodos = this.state.daily.filter((value, ind) => ind !== i);
		this.setState({ daily: newTodos });
	};

	render() {
		return (
			<div className="container mt-5 col-4 text-center">
				<div className="header">DAILY</div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<ul>
								<li className="inputField">
									<textarea
										placeholder="Stop being lazy and JUST DO IT!"
										type="text"
										onKeyUp={e =>
											e.keyCode == 13 ? actions.addTodo(e.target.value, "daily") : null
										}
									/>
									{/* <div className="deleteX">
								<i className="fab fa-xing" />
							</div> */}
								</li>
								{store.allTodos.map((td, i) => {
									if (td.frequency == "daily") {
										return (
											<li key={i} className="todoList">
												<textarea
													type="text"
													value={td.label}
													onChange={e => {
														this.setState({
															daily: this.state.daily.map((t, ind) => {
																if (ind === i) {
																	return e.target.value;
																} else {
																	return t;
																}
															})
														});
													}}
												/>
												<div onClick={() => this.deleteDaily(i)} className="deleteX">
													<i className="fab fa-xing" />
												</div>
												<Link to="/morecard">
													<div className="myButton">more</div>
												</Link>
											</li>
										);
									}
								})}
							</ul>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
export default Daily;
