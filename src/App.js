import { Box } from "./components";
import "./App.css";
import * as Sort from "./utils";

const App = () => {
	return (
		<div className="App">
			<div className="container">
				<Box
					label="Bubble Sort"
					sortingAlgo={async (array, setArray, withStep) => {
						return await Sort.BubbleSort(array, setArray, withStep);
					}}
					color="red"
				/>
				<Box
					label="Selection Sort"
					sortingAlgo={async (array, setArray, withStep) => {
						return await Sort.SelectionSort(
							array,
							setArray,
							withStep
						);
					}}
				/>
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
		</div>
	);
};

export default App;
