const aquaticAnimals = ["otter", "shark", "bluefin tuna", "shark"];
const rainforestAnimals = ["orang-utan", "elephant", "snake", "snake"];

let awesomeAnimals = [ ...aquaticAnimals, ...rainforestAnimals];

let set = new Set(awesomeAnimals);
awesomeAnimals = [...set];

console.log(awesomeAnimals);
