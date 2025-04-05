/*
rint Max, Min, Average Array Values printMaxMinAverageArrayVals(arr). Given an array, print the max, min and average values for that array.
*/

function printAll (){
    var arr = [-1,2,3,4,5,6,7,8,9,10];
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];  // print the Biggest number
        }
        if(arr[i] < min){
            min = arr[i];   // print the smallest number
        }
        sum += arr[i];   // sum of all the numbers
    }
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log("Average: " + sum/arr.length);
}
printAll();