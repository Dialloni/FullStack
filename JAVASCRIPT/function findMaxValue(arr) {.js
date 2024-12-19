
function findMaxValue(arr) {
    if (arr.length === 0) return undefined; // Handle empty array case

    let max = arr[0]; // Initialize max with the first element of the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }
    return max;
}

// Example usage:
const numbers = [2, 3, 1, 5, 4];
console.log(findMaxValue(numbers)); // Output: 5

console.log("--------------------------------------------------");

function findMinValue(array) {
    if (array.length === 0) return undefined; // Corrected spelling

    let min = array[0];
    for (let i = 1; i < array.length; i++) { // Start loop from 1
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min; // Moved outside the loop
}

const minNums = [2, 3, 1, 5, 4];
console.log(findMinValue(minNums)); // Output: 1