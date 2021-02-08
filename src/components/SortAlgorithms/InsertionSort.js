import React from "react";
import Box from "../Box";
import * as Sort from "../../utils";
import "./styles.css";

const InsertionSort = () => {
	return (
		<div>
			<div className="container" style={{ marginTop: "1rem" }}>
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
			<div
				className="container"
				style={{ marginTop: "1rem", paddingBottom: "1rem" }}
			>
				<h3>Algorithm</h3>
				<table>
					<thead>
						<tr>
							<th>Case</th>
							<th>Comparisons</th>
							<th>Swaps</th>
						</tr>
					</thead>
					<tbody>
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
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InsertionSort;
