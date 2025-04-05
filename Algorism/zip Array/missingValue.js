/*
Missing Value. You are given a sorted array of length N that contains integers from 0 to N. One integer value is missing. Quickly determine and return the missing value. Given ([0,1,3]), return 2.
*/

function missingValue(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (arr.length * (arr.length + 1)) / 2 - sum;   
}
console.log(missingValue([0, 1, 2,4])); //