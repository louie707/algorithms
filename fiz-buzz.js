// const fizzbuzz = num => {
//     for(i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0)console.log("FizzBuzz")
//         else if(i % 3 === 0)console.log("Fiz")
//         else if(i % 5 === 0)console.log("Buzz")
//         else console.log(i)
        
//     }
// }

// fizzbuzz(20);

// With array
// const num = 15;

// var fizzBuzz = function(nun) {
//     let answer = [];
    
//     for(let i = 1; i <= num; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             answer.push("FizzBuzz")
//         }
//         else if(i % 3 === 0){
//             answer.push("Fizz")
//         }
//         else if(i % 5 === 0){
//             answer.push("Buzz")
//         }
//         else{
//             answer.push(`${i}`)
//         }
//     }
//     console.log(answer)
// };
// fizzBuzz(num)

const addUptoN = num => {
    let total = 0;
    for(i = 0; i <= num; i++){
        total += i; 
    }
    return total; 
}

console.log(addUptoN(20));