import "../../styles/home.scss";
import React from "react";
import { Link } from "react-router-dom";

export const Monthly = () => {
	addTodo = e => {
		if (e.keyCode === 13) {
			this.setState({
				todos: this.state.todos.concat(e.target.value)
			});
			e.target.value = "";
		}
	};

	deleteTodo = i => {
		var newTodos = this.state.todos.filter((value, ind) => ind !== i);
		this.setState({ todos: newTodos });
	};
	return (
		<div className="container col-4 text-center">
			<div className="header">DAILY</div>
			<ul>
				<li className="inputField">
					<textarea
						placeholder="Stop being lazy and JUST DO IT!"
						type="text"
						onKeyUp={e => this.addTodo(e)}
					/>
					<div className="deleteX">x</div>
				</li>
				{this.state.todos.map((td, i) => (
					<li key={i} className="todoList">
						<textarea
							type="text"
							value={td}
							onChange={e => {
								this.setState({
									todos: this.state.todos.map((t, ind) => {
										if (ind === i) {
											return e.target.value;
										} else {
											return t;
										}
									})
								});
							}}
						/>
						<div onClick={() => this.deleteTodo(i)} className="deleteX">
							x
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
