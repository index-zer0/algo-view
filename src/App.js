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
				<div className="topnav" id="myTopnav">
					<a href="#home">Home</a>
					<a href="#news">News</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</div>

				<div>
					<input type="checkbox" className="checkbox" id="chk" />
					<label className="label" htmlFor="chk">
						<div className="ball"></div>
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
							<div className="card" style={{ marginTop: "5rem" }}>

								<div className="header">
									<p>Sorting Algorithms</p>
								</div>
								<div className="container">
									<ul>
										<li><a className="url" href="url">Bubble Sort</a></li>
										<li><a className="url" href="url">Insertion Sort</a></li>
										<li><a className="url" href="url">Selection Sort</a></li>
										<li><a className="url" href="url">Quick Sort</a></li>
									</ul>
									<br></br>
									<button className="button" >Go</button>
								</div>
							</div>
							<div className="card" style={{ marginLeft: "1rem", marginTop: "5rem" }}>

								<div className="header">
									<p>Search Algorithms</p>
								</div>
								<div className="container">
									<ul>
										<li><a className="url" href="url">Depth First Search</a></li>
										<li><a className="url" href="url">Breadth First Search</a></li>
										<li><a className="url" href="url">A *</a></li>
										<li><a className="url" href="url">Djikstra's</a></li>
									</ul>
									<br></br>
									<button className="button" >Go</button>
								</div>
							</div>
							<div className="card" style={{ marginLeft: "1rem", marginTop: "5rem" }}>

								<div className="header">
									<p>Calculators</p>
								</div>
								<div className="container">
									<ul>
										<li><a className="url" href="url">Calculus</a></li>
										<li><a className="url" href="url">Calculus II</a></li>
										<li><a className="url" href="url">Linear Algebra</a></li>
										<li><a className="url" href="url">Discrete Mathematics</a></li>
									</ul>
									<br></br>
									<button className="button" >Go</button>
								</div>
							</div>

						</Route>
						<Route path="/sort" component={SortAlgorithms} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};


const chk = document.getElementById('chk');
if (chk) {
	chk.addEventListener('change', () => {
		document.body.classList.toggle('light');
	});
}




export default App;
