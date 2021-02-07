import React from "react";
import "./styles.css";

const newArray = (setSorted: () => void): number[] => {
	const arr = [];
	while (arr.length < 20) {
		var r = Math.floor(Math.random() * 255); // Math.floor(Math.random() * 16777215).toString(16);
		if (arr.indexOf(r) === -1) arr.push(r);
	}
	setSorted(false);
	return arr;
};

const numberToColor = (item, color): string => {
	switch (color) {
		case "red":
			return "rgb(" + item + ",0,0)";
		case "green":
			return "rgb(0," + item + ",0)";
		default:
			return "rgb(0,0," + item + ")";
	}
};

interface BoxProps {
	label: string;
	sortingAlgo: () => void;
	color: "red" | "green" | "blue";
}

const Box = ({ label, sortingAlgo, color = "blue" }: BoxProps) => {
	const [array, setArray] = React.useState([]);
	const [sorted, setSorted] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setArray(newArray(setSorted));
	}, []);

	const sort = async (withStep: boolean = false) => {
		if (!withStep) {
			setLoading(true);
		}
		await sortingAlgo({ array, setArray, withStep });
		if (withStep) {
			for (let i = 0; i < array.length - 1; i++) {
				// this should change for descending
				if (array[i] > array[i + 1]) {
					// not sorted
					setLoading(false);
					return;
				}
			}
		}
		setSorted(true);
		setLoading(false);
	};
	return (
		<div>
			<h3 className="title">{label}</h3>
			<div className="algo">
				{array.map((item, index) => (
					<Cell
						key={index}
						value={item}
						color={numberToColor(item, color)}
					/>
				))}
			</div>
			{!loading && (
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
			)}
			{!loading && !sorted && (
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
