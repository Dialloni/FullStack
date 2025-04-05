/*
Square Array Values squareArrayVals(arr). Square each value in a given array, returning that same array with changed values. Given [1,2,3,4,5] return [1,4,9,16,25]
*/

function printSquare(){
    var arr = [1,2,3,4,5];
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];   // or WE CAN USEE THE Math.pow() method
       // arr[i] = Math.pow(arr[i], 2);
    }
    console.log(arr);
}

printSquare();