import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import Monthly from "./monthly";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			daily: []
		};
	}

	addDaily = e => {
		if (e.keyCode === 13) {
			this.setState({
				daily: this.state.daily.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteDaily = i => {
		var newTodos = this.state.daily.filter((value, ind) => ind !== i);
		this.setState({ daily: newTodos });
	};

	render() {
		return (
			<>
				<Navbar />
				<div className="container mt-5 col-4 text-center">
					<div className="header">DAILY</div>
					<ul>
						<li className="inputField">
							<textarea
								placeholder="Stop being lazy and JUST DO IT!"
								type="text"
								onKeyUp={e => this.addDaily(e)}
							/>
							{/* <div className="deleteX">
								<i className="fab fa-xing" />
							</div> */}
						</li>
						{this.state.daily.map((td, i) => (
							<li key={i} className="todoList">
								<textarea
									type="text"
									value={td}
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
export default Home;
