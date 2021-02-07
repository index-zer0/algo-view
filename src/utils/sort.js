import { sleep } from "./common";

interface sortProps {
	array: number[];
	setArray: () => void;
	withStep: boolean;
}

const updateState = async ({ array, setArray, withStep }: sortProps): void => {
	await setArray([...array]);
	await sleep(100);
	if (withStep) {
		return array;
	}
};

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
		}
	}
	return array;
};
