/*
Create a function that accepts an array and replaces all negative values in the array with the word "Negative". Example [-1,2,-3,4,-5] returns ["Negative",2,"Negative",4,"Negative"]
*/
let array = [-1, 2, -3, 4, -5];

function changeNumbs(arr) {
    let nArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            nArray.push("Negative");
        } else {
            nArray.push(arr[i]);
        }
    }
    return nArray;
}


console.log(changeNumbs(array)); 

/**
 Create a function that accepts a string and returns that string but reversed. Example: Given "string"  return "gnirts"
 */

 let str = "string";

 function changeLetters (string) {
  
    let newString = "";
    for ( let i = string.length -1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
 }

    console.log(changeLetters("string"));
    console.log(changeLetters("hello"));
