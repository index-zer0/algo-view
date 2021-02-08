import React from "react";
import Box from "../Box";
import * as Sort from "../../utils";
import "./styles.css";

const code = {
	C: "#include<stdio>",
	CPP: "#include<iostream>",
	PYTHON: "import math"
};


const BubbleSort = () => {
	const [lang, setLang] = React.useState("C");
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
			<div
				className="container"
				style={{ marginTop: "1rem", paddingBottom: "1rem" }}
			>

				<h2>Time for some code</h2>

				<div class="tab">
					<button class="tablinks" onClick={() => setLang("C")}> C</button>
					<button class="tablinks" onClick={() => setLang("CPP")}> C++</button>
					<button class="tablinks" onClick={() => setLang("Python")}> Python</button>
				</div>
				{lang === "C" && <div>{code.C}</div>}
				{lang === "CPP" && <div>{code.CPP}</div>}
				{lang === "Python" && <div>{code.PYTHON}</div>}
			</div>
		</div>
	);
};

export default BubbleSort;

