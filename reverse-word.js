const reverseWord = word => {
const wordSplit = word.split(" ");
let reversed = [];

wordSplit.forEach(words => {
    reversed.push(words.split("").reverse().join(""))
});
console.log(reversed.reverse().join(" "))

}

reverseWord("this is a string of words");

// without using reverse() method
// const reverseWord = word => {
// const wordSplit = word.split(" ");
// let reversed = [];

// wordSplit.forEach(word => {
//     let reversedWord = "";
//     for(let i = word.length-1; i >= 0; i--){
//         reversedWord += word[i];
//     }
//     reversed.push(reversedWord)
// }); 

// console.log(reversed.join(" "))
// }

// reverseWord("this is a string of words");