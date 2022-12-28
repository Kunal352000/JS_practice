// Create a function that will accept an array and do the following:
// 1. Get the lowest element
// 2. Get the highest element
// 3. Get the length of array
// 4. Get the Average of all element;
// 5. Store these criteria in a new array


function getMinMax(arr, n){
    minmax = new Array();
	var i;
	var min;
	var max;

    if (arr[0] > arr[1]) {
		minmax.max = arr[0];
		minmax.min = arr[1];
		}else{
			minmax.max = arr[1];
			minmax.min = arr[0];
		}

		for (i = 2; i < n; i++) {
			if (arr[i] > minmax.max) {
				minmax.max = arr[i];
			} else if (arr[i] < minmax.min) {
				minmax.min = arr[i];
			} 
		}

		return minmax;
	}

	/* Driver program to test above function */
	
		var arr = [1000, 11, 445, 1, 330, 3000];
		minmax = getMinMax(arr, arr.length);
		console.log(minmax.min);
		console.log(minmax.max);

// This code is contributed by shivanisinghss2110





