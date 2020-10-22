import React from "react";
import Home from "./views/home";
import Testview from "./views/testview";
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
					<Route exact path="/testview">
						<Testview />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
