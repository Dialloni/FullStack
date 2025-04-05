/*
Array swap pairs. Swap positions of successive pairs of values of a given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
*/

function swapPairs(arr){
    for(let i = 0; i < arr.length-1; i+=2){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}

console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));
console.log(swapPairs(["Diallo", "Hello", "Meet you", "Nice to"]));