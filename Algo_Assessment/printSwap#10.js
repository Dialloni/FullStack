/*
Swap String for Array Negative Values swapStringForArrayNegativeVals(arr). Given an array of numbers, replace any negative values with the string 'Skillspire'.
*/

function printSwap(){
    var arr = [-1,2,-3,4,-5,6,-7,8,-9,10];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Skillspire";
        }
    }
    console.log(arr);
}

printSwap();