// Function to get the N-from-end element of an array
function getElementFromEnd(arr, N) {
    if (N > arr.length) {
        return null;
    }
    return arr[arr.length - N];
}

// Function to count numbers greater than a given number Y
function countGreaterThanY(arr, Y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(getElementFromEnd([5, 2, 3, 6, 4, 9, 7], 3)); // Output: 4
console.log(countGreaterThanY([1, 2, 3, 4, 5], 2)); // Output: 3