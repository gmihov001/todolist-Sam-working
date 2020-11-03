import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import MoreCard from "./views/morecard";
import Daily from "./views/daily";
import Weekly from "./views/weekly";
import Monthly from "./views/monthly";
import Yearly from "./views/yearly";
import Navbar from "./component/navbar";

import injectContext from "./store/appContext";

const Layout = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
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

					<Route exact path="/daily" component={Daily} />

					<Route exact path="/weekly" component={Weekly} />

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
};

export default injectContext(Layout);
