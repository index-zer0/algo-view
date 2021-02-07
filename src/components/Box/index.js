import React from "react";
import "./styles.css";

const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const newArray = (setSorted: () => void): number[] => {
	const arr = [];
	while (arr.length < 10) {
		var r = Math.floor(Math.random() * 255); // Math.floor(Math.random() * 16777215).toString(16);
		if (arr.indexOf(r) === -1) arr.push(r);
	}
	setSorted(false);
	return arr;
};

interface sortProps {
	array: number[];
	setArray: () => void;
	withStep: boolean;
}

const BubbleSort = async ({
	array,
	setArray,
	withStep,
}: sortProps): number[] => {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				await setArray([...array]);
				await sleep(100);
				if (withStep) {
					return array;
				}
			}
		}
	}
	return array;
};

const Box = () => {
	const [array, setArray] = React.useState([]);
	const [sorted, setSorted] = React.useState(false);
	React.useEffect(() => {
		setArray(newArray(setSorted));
	}, []);

	const sort = async (withStep: boolean = false) => {
		await BubbleSort({ array, setArray, withStep });
		if (withStep) {
			for (let i = 0; i < array.length - 1; i++) {
				// this should change for descending
				if (array[i] > array[i + 1]) {
					// not sorted
					return;
				}
			}
		}
		setSorted(true);
	};
	return (
		<div className="container">
			<div className="algo">
				{/*displayArray(array)*/}
				{array.map((item, index) => (
					<Cell
						key={index}
						value={item}
						color={"rgb(0,0," + item + ")"}
					/>
				))}
			</div>
			<button
				className="button"
				onClick={() => {
					if (!sorted) {
						sort();
					} else {
						setArray(newArray(setSorted));
					}
				}}
			>
				{!sorted ? "Sort" : "New array"}
			</button>
			{!sorted && (
				<button
					className="button"
					onClick={() => {
						sort(true);
					}}
				>
					Next step
				</button>
			)}
		</div>
	);
};

export default Box;

const Cell = ({ value, color }) => {
	return (
		<div
			style={{ backgroundColor: color, color: "white" }}
			className="cell"
		>
			{value}
		</div>
	);
};
