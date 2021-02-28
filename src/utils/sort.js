import { sleep } from "./common";

interface sortProps {
	array: number[];
	setArray: () => void;
	withStep: boolean;
}

const updateState = async ({ array, setArray, withStep }: sortProps): void => {
	await setArray([...array]);
	await sleep(100);
};

const updateAppendState = async ({ array, left, right, setArray, withStep }) => {
	array.push(left);
	array.push(right);
	await setArray([...array]);
	await sleep(100);
}


export const BubbleSort = async ({
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
				await updateState({ array, setArray, withStep });
				if (withStep) {
					return array;
				}
			}
		}
	}
	return array;
};

export const SelectionSort = async ({
	array,
	setArray,
	withStep,
}: sortProps): number[] => {
	let len = array.length;
	for (let i = 0; i < len; i++) {
		let min = i;
		for (let j = i + 1; j < len; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		if (min !== i) {
			let tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
			await updateState({ array, setArray, withStep });
			if (withStep) {
				return array;
			}
		}
	}
	return array;
};

export const InsertionSort = async ({
	array,
	setArray,
	withStep,
}: sortProps): number[] => {
	let len = array.length;
	for (let i = 1; i < len; i++) {
		let key = array[i];
		let j = i - 1;
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j];
			j = j - 1;
		}
		array[j + 1] = key;
		await updateState({ array, setArray, withStep });
		if (withStep) {
			return array;
		}
	}
	return array;
};


export const QuickSort = async ({
	array,
	setArray,
	withStep,
}: sortProps, arr): number[] => {
	if (!arr) {
		arr = array[0]
	}
	if (arr.length <= 1) {
		return arr;
	}
	var pivot = arr[0];

	const left = [];
	const right = [];


	for (var i = 1; i < arr.length; i++) {
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
	}



	await updateAppendState({ array, left, right, setArray, withStep });
	console.log("array" + array);
	console.log("arr" + arr);

	if (withStep) {
		return arr;
	}


	return (await QuickSort({ array, setArray, withStep }, arr)).concat(pivot, await QuickSort({ array, setArray, withStep }, arr));
};