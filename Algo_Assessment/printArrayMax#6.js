/*
6.Print Max of Array printMaxOfArray(arr). Given an array, find and print its largest element.
*/

function printArrayMaX (arr) {

    var max = arr[0];
    for ( var i = 0; i < arr.length; i++){
        if ( arr[i] > max){
            max = arr[i];
        }
    }
    console.log("The highest max is:", max);
}

console.log(printArrayMaX([1,2,3,4,24,6,7,8,9,1]));