function pushNumber(num){
    let array = [2,3,4,5];
    array.push(num);
    for(let i =array.length-1; i > 0; i--){
        let temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        console.log(array[i]);
    }
   
    return array;
}
console.log(pushNumber(1)); // [1,2,3,4,5]