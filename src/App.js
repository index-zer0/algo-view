import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
				<Router basename="/">
					<Switch>
						<Route
							path="/algo-view/sort"
							component={SortAlgorithms}
						/>
						<Route path="/algo-view">
							<div className="container">Home</div>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
