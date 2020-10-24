import React from "react";
import Home from "./views/home";
import MoreCard from "./views/morecard";
import Daily from "./views/daily";
import Weekly from "./views/weekly";
import Monthly from "./views/monthly";
import Yearly from "./views/yearly";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/morecard">
						<MoreCard />
					</Route>
					<Route exact path="/daily">
						<Daily />
					</Route>
					<Route exact path="/weekly">
						<Weekly />
					</Route>
					<Route exact path="/monthly">
						<Monthly />
					</Route>
					<Route exact path="/yearly">
						<Yearly />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
