import React from "react";
import { Route } from "react-router-dom";
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";
import InsertionSort from "./InsertionSort";
import "./styles.css";

const SortAlgorithms = () => {
	return (
		<div>
			<Route path="/algo-view/sort/bubble" component={BubbleSort} />
			<Route path="/algo-view/sort/selection" component={SelectionSort} />
			<Route path="/algo-view/sort/insertion" component={InsertionSort} />
		</div>
	);
};

export default SortAlgorithms;
