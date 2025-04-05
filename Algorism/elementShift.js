/*
-Shift Array Values Left shiftArrayValsLeft(arr). Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. Given [1,2,3,4,5] return [2,3,4,5,0]. You DON’T need to use the swap method for this one.​
*/

const array = [1,2,3,4,5]
const firstElement = array.shift()
array.push(0)

console.log(array);
