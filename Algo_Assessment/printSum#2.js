/*
Print Ints and Sum 0-255 printIntsAndSum0To255(). Print integers from 0 to 255, and with each integer print the sum so far
*/

function printNumNSum() {
    var sum = 0;
    for (var i = 0; i <= 255; i++) {
        sum += i;
        console.log(i, sum);
    }
}
console.log(printNumNSum());