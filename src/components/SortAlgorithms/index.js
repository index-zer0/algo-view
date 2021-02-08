import React from "react";
import { Route } from "react-router-dom";
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import InsertionSort from "./InsertionSort";
import QuickSort from "./QuickSort";

import "./styles.css";

const SortAlgorithms = () => {
	return (
		<div>
			<Route path="/sort">
				<div>Sort</div>
			</Route>
			<Route exact path="/sort/bubble" component={BubbleSort} />
			<Route exact path="/sort/selection" component={SelectionSort} />
			<Route exact path="/sort/insertion" component={InsertionSort} />
			<Route exact path="/sort/quick" component={QuickSort} />

		</div>
	);
};

export default SortAlgorithms;
