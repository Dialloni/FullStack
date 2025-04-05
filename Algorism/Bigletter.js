/*
- Given a string of words (sentence) create a function that capitalizes every word in the string. Given “hello there skillspire” return “Hello There Skillspire”. ​
*/

// function bigLetter(letter) {
//   let words = letter.split(" ");
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let firstLetter = word[0].toUpperCase();
//     let otherWord = word.slice(1);
//     result += firstLetter + otherWord + " ";
//   }
//   return result.trim();
// }

// console.log(bigLetter("hello there skillspire"));


function removeWithoutTrim(string){

  let result = "", start = 0, end = string.length-1

  "      whitespace     "

  while (string[start] == " ") start++
  while(string[end] == " ") end++
    
    for (let i = start; i <= end; i++ ){
      result += string[i]
    }

    return capitalize(result);
}

console.log(removeWithoutTrim("      whitespace     "))

