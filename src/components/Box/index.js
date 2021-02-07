import React from "react";
import "./styles.css";

const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const displayArray = (array: number[]): string => {
	let array_string = "";
	for (let i = 0; i < array.length; i++) {
		array_string += array[i].toString();
		if (i !== array.length - 1) {
			array_string += " ";
		}
	}
	return array_string;
};

const newArray = (setSorted: () => void): number[] => {
	const arr = [];
	while (arr.length < 10) {
		var r = Math.floor(Math.random() * 100) + 1;
		if (arr.indexOf(r) === -1) arr.push(r);
	}
	setSorted(false);
	return arr;
};

interface sortProps {
	array: number[];
	setArray: () => void;
}

const BubbleSort = async ({ array, setArray }: sortProps): number[] => {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				const temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				await setArray([...array]);
				await sleep(100);
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

	//console.log(BubbleSort(arr));
	const sort = async () => {
		await BubbleSort({ array, setArray });
		setSorted(true);
	};
	return (
		<div className="container">
			{displayArray(array)}
			<button
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
		</div>
	);
};

export default Box;
