import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, NavItem, DropdownMenu, SortAlgorithms, Link } from "./components";
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
							{/*<div>
								<h1 id="gr">Ελληνικά</h1>
								<h1 id="en">English</h1>
								<ul className="social">
									<li id="gr_click" className="button_lang current_lang">Gr</li>
									<li id="en_click" className="button_lang">En</li>
								</ul>
							</div>*/}
						</Route>
						<Route path="/sort" component={SortAlgorithms} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};


/*dark mode*/
window.onload = function () {
	const chk = document.getElementById('chk');
	chk.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});
}


/*language switcher*/
var greek = document.getElementById('gr_click'),
	english = document.getElementById('en_click'),
	gr_txt = document.querySelectorAll('#gr'),
	en_txt = document.querySelectorAll('#en'),
	nb_gr = gr_txt.length,
	nb_en = en_txt.length;

if (greek) {
	greek.addEventListener('click', function () {
		langue(greek, english);
	}, false);

}

if (english) {
	english.addEventListener('click', function () {
		langue(english, greek);
	}, false);
}


function langue(langueOn, langueOff) {
	if (langueOn) {
		if (!langueOn.classList.contains('current_lang')) {
			langueOn.classList.toggle('current_lang');
			langueOff.classList.toggle('current_lang');
		}

		if (langueOn.innerHTML == 'Gr') {
			for (var i = 0; i < nb_gr; i++) {
				gr_txt[i].style.display = 'block';
			}
			for (var i = 0; i < nb_en; i++) {
				en_txt[i].style.display = 'none';
			}
		}
		else if (langueOn.innerHTML == 'En') {
			for (var i = 0; i < nb_en; i++) {
				en_txt[i].style.display = 'block';
			}
			for (var i = 0; i < nb_gr; i++) {
				gr_txt[i].style.display = 'none';
			}
		}
	}

}

langue(greek, english);
export default App;
