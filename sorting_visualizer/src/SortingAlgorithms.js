

function bubbleSort(array, leftIndex, rightIndex, recordProgressFunc) {

        let span = rightIndex - leftIndex;
        if (span === 0) {
                return array;
        }

        let subArray = array.slice(leftIndex, rightIndex + 1);
        let minValue = Math.min(...subArray);
        let indexOfMinValue = subArray.indexOf(minValue);
        let tmp = subArray[0];
        array[leftIndex + indexOfMinValue] = tmp;
        array[leftIndex] = minValue;

        recordProgressFunc(array);
        return bubbleSort(array, leftIndex + 1, rightIndex, recordProgressFunc);
};


function merge(left, right) {
	
	
	let leftHasItems = true;
	let rightHasItems = true;
	let mergedArray = [];
		
	while (leftHasItems || rightHasItems) {
		
		if (leftHasItems && rightHasItems) {
			if (left[0] <= right[0]) {
				mergedArray.push(left[0]);
				left = left.slice(1);
			}
			else {
				mergedArray.push(right[0]);
                                right = right.slice(1);
			}
		}
		else if (leftHasItems) {
			mergedArray.push(left[0]);
                        left = left.slice(1);
		}
		else { 
			mergedArray.push(right[0]);
			right = right.slice(1);
		}

		leftHasItems = left.length > 0;
		rightHasItems = right.length > 0;
	}

	return mergedArray;
}

function mergeSort(array, originalArray, leftIndex, recordProgressFunc) {
	
	let span = array.length;
        if (span <= 1) {
                return array;
        }
	
	let midIndex = span/2;
	let left = array.slice(0, midIndex);
	let right = array.slice(midIndex);
	
	left = mergeSort(left, originalArray, leftIndex, recordProgressFunc);
	right = mergeSort(right, originalArray, leftIndex + span/2, recordProgressFunc);
	
	
	let mergedArray = merge(left, right, recordProgressFunc);
		
	for (let i = 0; i < mergedArray.length; i++) {
		originalArray[leftIndex + i] = mergedArray[i];  
	}	
	
	recordProgressFunc(originalArray);
	return mergedArray;
}

export { bubbleSort, mergeSort };