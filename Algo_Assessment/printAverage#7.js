/*
Print Average of Array printAverageOfArray(arr). Analyze an array’s values and print the average.
*/

function printAverage(arr){

    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log("The average is:", sum/arr.length);
}

console.log(printAverage([1,2,3,4,50,26,7,8,9,10]));