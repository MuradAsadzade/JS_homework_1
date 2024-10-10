function bubbleSort(arr) {
    // Loop over the array multiple times
    for (let i = 0; i < arr.length; i++) {
        // Inner loop to compare adjacent pairs
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap if the current item is greater than the next one
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;  // Assume the current element is the minimum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;  // Update minIdx if a smaller element is found
            }
        }
        if (minIdx !== i) {
            // Swap the minimum element with the first unsorted element
            const temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;  // Base case: single element arrays are already sorted
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));  // Recursively sort the left half
    const right = mergeSort(arr.slice(mid));    // Recursively sort the right half

    return merge(left, right);  // Merge the two sorted halves
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Compare the elements of the two arrays and merge them
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements (if any) from both halves
    return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };