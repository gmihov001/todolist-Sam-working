import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";

class Weekly extends React.Component {
	constructor() {
		super();
		this.state = {
			weekly: []
		};
	}

	addWeekly = e => {
		if (e.keyCode === 13) {
			this.setState({
				weekly: this.state.weekly.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteWeekly = i => {
		var newTodos = this.state.weekly.filter((value, ind) => ind !== i);
		this.setState({ weekly: newTodos });
	};

	render() {
		return (
			<>
				<div className="container mt-5 col-4 text-center">
					<div className="header">WEEKLY</div>
					<ul>
						<li className="inputField">
							<textarea
								placeholder="Stop being lazy and JUST DO IT!"
								type="text"
								onKeyUp={e => this.addWeekly(e)}
							/>
						</li>
						{this.state.weekly.map((td, i) => (
							<li key={i} className="todoList">
								<textarea
									type="text"
									value={td}
									onChange={e => {
										this.setState({
											weekly: this.state.weekly.map((t, ind) => {
												if (ind === i) {
													return e.target.value;
												} else {
													return t;
												}
											})
										});
									}}
								/>
								<div onClick={() => this.deleteWeekly(i)} className="deleteX">
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
export default Weekly;
