import React from "react";
import Box from "../Box";
import * as Sort from "../../utils";
import "./styles.css";

const code = {
	C: "void bubbleSort(int arr[], int n)",
	CPP: "#include<iostream>",
	PYTHON: "import math"
};

const SelectionSort = () => {
	const [lang, setLang] = React.useState("C");
	return (
		<div>
			<div className="container" style={{ marginTop: "1rem" }}>
				<Box
					label="Selection Sort"
					sortingAlgo={async (array, setArray, withStep) => {
						return await Sort.SelectionSort(
							array,
							setArray,
							withStep
						);
					}}
					color="blue"
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
							<th>O(n)</th>
						</tr>
						<tr>
							<th>Best</th>
							<th>O(n&#178;)</th>
							<th>1</th>
						</tr>
						<tr>
							<th>Average</th>
							<th>O(n&#178;)</th>
							<th>O(n)</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div
				className="container"
				style={{ marginTop: "1rem", paddingBottom: "1rem" }}
			>

				<h2>Time for some code</h2>

				<div className="tab">
					<button className="tablinks" onClick={() => setLang("C")}> C</button>
					<button className="tablinks" onClick={() => setLang("CPP")}> C++</button>
					<button className="tablinks" onClick={() => setLang("Python")}> Python</button>
				</div>
				{lang === "C" && <div>{code.C}</div>}
				{lang === "CPP" && <div>{code.CPP}</div>}
				{lang === "Python" && <div>{code.PYTHON}</div>}
			</div>
		</div>
	);
};

export default SelectionSort;
