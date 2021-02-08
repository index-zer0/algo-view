import React from "react";
import { Route } from "react-router-dom";
import Box from "../Box";
import * as Sort from "../../utils";
import "./styles.css";

const SortAlgorithms = () => {
	return (
		<div>
			<Route path="/sort/bubble">
				<div className="container">
					<Box
						label="Bubble Sort"
						sortingAlgo={async (array, setArray, withStep) => {
							return await Sort.BubbleSort(
								array,
								setArray,
								withStep
							);
						}}
						color="red"
					/>
				</div>
			</Route>
			<Route path="/sort/selection">
				<div className="container">
					<Box
						label="Selection Sort"
						sortingAlgo={async (array, setArray, withStep) => {
							return await Sort.SelectionSort(
								array,
								setArray,
								withStep
							);
						}}
						color="green"
					/>
				</div>
			</Route>
			<Route path="/sort/insertion">
				<div className="container">
					<Box
						label="Insertion Sort"
						sortingAlgo={async (array, setArray, withStep) => {
							return await Sort.InsertionSort(
								array,
								setArray,
								withStep
							);
						}}
						color="green"
					/>
				</div>
			</Route>
		</div>
	);
};

export default SortAlgorithms;
