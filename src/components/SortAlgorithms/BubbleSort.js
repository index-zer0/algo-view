import React from "react";
import Box from "../Box";
import * as Sort from "../../utils";
import "./styles.css";

const BubbleSort = () => {
	return (
		<div>
			<div className="container" style={{ marginTop: "1rem" }}>
				<Box
					label="Bubble Sort"
					sortingAlgo={async (array, setArray, withStep) => {
						return await Sort.BubbleSort(array, setArray, withStep);
					}}
					color="red"
				/>
			</div>
			<div
				className="container"
				style={{ marginTop: "1rem", paddingBottom: "1rem" }}
			>
				<h3>Algorithm</h3>
				<table>
					<tr>
						<th>Case</th>
						<th>Comparisons</th>
						<th>Swaps</th>
					</tr>
					<tr>
						<th>Worst</th>
						<th>O(n&#178;)</th>
						<th>O(n&#178;)</th>
					</tr>
					<tr>
						<th>Best</th>
						<th>O(n)</th>
						<th>1</th>
					</tr>
					<tr>
						<th>Average</th>
						<th>O(n&#178;)</th>
						<th>O(n&#178;)</th>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default BubbleSort;
