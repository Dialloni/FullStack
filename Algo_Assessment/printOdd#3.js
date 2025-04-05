/*
Print Odds 1-255 printOdds1To255(). Print all odd integers from 1 to 255.
*/

function printOdd() {
    for ( var i = 1; i <= 255; i++) {
        if ( i %2 !== 0)
            console.log(i);
    }
}
console.log(printOdd());