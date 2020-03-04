const isPalindrome = string => {
    const charArr = string.toLowerCase().split("");
    const validChar = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let charactersArr = [];

    charArr.forEach(char => {
        if((validChar.indexOf(char)) > -1){
            charactersArr.push(char)
        }   
    })
    console.log(charactersArr.join(""));
    console.log(charactersArr.reverse().join(""));
    if(charactersArr.join("") === charactersArr.reverse().join("")) return true;
    else return false;
    
}


console.log(isPalindrome("Madam I'm Adam"));


// palindrome on string and number
// const isPalindrome = s => {
//     s = s.toLowerCase().split("");
//     const validChar = "abcdefghijklmnopqrstuvwxyz";
//     const validNum = "0123456789";
//     let palindrome = '';

//     s.forEach(word => {
//         if(validChar.indexOf(word) > -1 || validNum.indexOf(word) > -1){
//             palindrome += word;
//         }
//         if(word === "1")return false
//     })
    
//     if(palindrome === palindrome.split("").reverse().join("")) console.log("true")
//     else console.log("false")
// };
// isPalindrome(s);
