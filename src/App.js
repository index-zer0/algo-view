import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavItem, DropdownMenu, SortAlgorithms } from "./components";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Navbar>
				<a href="/algo-view" className="logo">
					Algo view
				</a>
				<NavItem icon="🖥️">
					<DropdownMenu />
				</NavItem>
			</Navbar>
			<div className="content">
				<Router basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/">
							<div className="container">Home</div>
						</Route>
						<Route path="/sort" component={SortAlgorithms} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
