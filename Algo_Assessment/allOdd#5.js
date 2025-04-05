/*
5.Return Odds Array 1-255 returnOddsArray1To255(). Create and return an array with all the odd integers between 1 and 255 (inclusive).
*/

function returnOddArray(){
    var arr = [];
for ( var i = 0; i <= 255; i++){
    if(i % 2 !== 0){
        arr.push(i);
    }
        
  }
    return arr;
}

console.log(returnOddArray());