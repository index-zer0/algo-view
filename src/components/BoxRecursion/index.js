import React from "react";
import { Cell, numberToColor, newArray, BoxProps } from "../Box";
import "../Box/styles.css";

const BoxRecursion = ({ label, sortingAlgo, color = "blue" }: BoxProps) => {
	const [array, setArray] = React.useState([]);
	const [sorted, setSorted] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setArray([newArray(setSorted)]);
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
			<div className="algo-group">
				{array.length > 0 && array.map((arr, i) => {
					return (
						<div className="algo" key={i}>
							{arr.map((item, index) => (
								<Cell
									key={index}
									value={item}
									color={numberToColor(item, color)}
								/>
							))}
						</div>
					)
				})}
			</div>
			{!loading && (
				<button
					className="button"
					onClick={() => {
						if (!sorted) {
							sort();
						} else {
							setArray([newArray(setSorted)]);
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

export default BoxRecursion;
