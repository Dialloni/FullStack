/*
Shift Array Values Left shiftArrayValsLeft(arr). Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array. Given [1,2,3,4,5] return [2,3,4,5,0]
*/

function shiftAllNum(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}

console.log(shiftAllNum([1,2,3,4,5]));