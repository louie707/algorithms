const plusOne = (digits) => {
    for (let i = digits.length-1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
}

let digits = [2,9,9,9];

console.log(plusOne(digits));

// var plusOne = function(digits) {
//     let lastDigit = digits[digits.length -1] = (digits[digits.length -1] +1)
    
//     if(lastDigit >= 9){
//         lastDigit = digits[digits.length -1] = 0;
//     }
//     else{
//         return digits;
//     }
//     digits.unshift(1);
//     return digits;
// };