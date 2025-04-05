// Given an array with only 2 values. Swap the places of those 2 values and 
// return the altered array. Given [1,2] return [2,1]

let arr = [2,2,3,4,5]

let temp = arr[0]

arr[0] = arr[1]

arr[1] = temp

console.log(arr)