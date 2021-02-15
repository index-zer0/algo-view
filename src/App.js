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
				<div className="navbar">
					<div className="subnav">
						<button className="subnavbtn">About <i className="fa fa-caret-down"></i></button>
						<div className="subnav-content">
							<a href="#company">Company</a>
							<a href="#team">Team</a>
							<a href="#careers">Careers</a>
						</div>
					</div>
					<div className="subnav">
						<button className="subnavbtn">Services <i className="fa fa-caret-down"></i></button>
						<div className="subnav-content">
							<a href="#bring">Bring</a>
							<a href="#deliver">Deliver</a>
							<a href="#package">Package</a>
							<a href="#express">Express</a>
						</div>
					</div>
					<div className="subnav">
						<button className="subnavbtn">Contact us<i className="fa fa-caret-down"></i></button>
					</div>
				</div>

				<div>
					<input type="checkbox" class="checkbox" id="chk" />
					<label class="label" for="chk">
						<i class="fas fa-moon"></i>
						<i class="fas fa-sun"></i>
						<div class="ball"></div>
					</label>
				</div>


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
/*
const chk = document.getElementById('chk');
if (chk) {
	chk.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});

}
*/

export default App;
