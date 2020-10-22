import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Monthly } from "../component/monthly";
class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			monthly: [],
			daily: [],
			yearly: []
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
	addDaily = e => {
		if (e.keyCode === 13) {
			this.setState({
				daily: this.state.daily.concat(e.target.value)
			});
			e.target.value = "";
		}
	};
	addYearly = e => {
		if (e.keyCode === 13) {
			this.setState({
				yearly: this.state.yearly.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteMonthly = i => {
		var newTodos = this.state.monthly.filter((value, ind) => ind !== i);
		this.setState({ monthly: newTodos });
	};
	deleteDaily = i => {
		var newTodos = this.state.daily.filter((value, ind) => ind !== i);
		this.setState({ daily: newTodos });
	};
	deleteYearly = i => {
		var newTodos = this.state.yearly.filter((value, ind) => ind !== i);
		this.setState({ yearly: newTodos });
	};

	render() {
		return (
			<>
				<Navbar />
				<div className="d-flex">
					<div className="container col-4 text-center">
						<div className="header">MONTHLY</div>
						<ul>
							<li className="inputField">
								<textarea
									placeholder="Stop being lazy and JUST DO IT!"
									type="text"
									onKeyUp={e => this.addMonthly(e)}
								/>
								<div className="deleteX">
									<i className="fab fa-xing" />
								</div>
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
								</li>
							))}
						</ul>
					</div>
					<div className="container col-4 text-center">
						<div className="header">DAILY</div>
						<ul>
							<li className="inputField">
								<textarea
									placeholder="Stop being lazy and JUST DO IT!"
									type="text"
									onKeyUp={e => this.addDaily(e)}
								/>
								<div className="deleteX">
									<i className="fab fa-xing" />
								</div>
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
								</li>
							))}
						</ul>
					</div>

					<div className="container col-4 text-center">
						<div className="header">YEARLY</div>
						<ul>
							<li className="inputField">
								<textarea
									placeholder="Stop being lazy and JUST DO IT!"
									type="text"
									onKeyUp={e => this.addYearly(e)}
								/>
								<div className="deleteX">
									<i className="fab fa-xing" />
								</div>
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

									<Link to="/testview">
										<button className="myButton">more</button>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</>
		);
	}
}
export default Home;
