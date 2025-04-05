/*
Return Array Count Greater than Y returnArrayCountGreaterThanY(arr, y). Given an array and a value Y, count and print the number of array values greater than Y. Given [1,2,3,4,5], Y = 3 return 2 (because there are 2 values in the array that are greater than 3
*/

function printGreater(){
    var arr = [1,2,3,4,5];
    var y = 3;
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    console.log(count);
}

printGreater();