// const caesarCipher = (str, num) => {
//     num = num % 26
//     const lowerCaseString = str.toLowerCase();
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let newString = '';

//     for(let i = 0; i < lowerCaseString.length; i++){
//         let currentLetter = lowerCaseString[i];
//         if(currentLetter === ' '){
//             newString += currentLetter;
//             continue;
//         }

//         let currentIndex = alphabet.indexOf(currentLetter);
//         let newIndex = currentIndex + num;
//         if (newIndex > 25) newIndex = newIndex - 26;
//         if (newIndex < 0) newIndex = 26 + newIndex;
//         if (str[i] === str[i].toUpperCase()) {
//             newString += alphabet[newIndex].toUpperCase();
//         } 
//         else newString += alphabet[newIndex];
        
//     }
//     console.log(newString)
    
// }

// caesarCipher("Ab c", 2)


const caesarCipher = (str, num) => {
    num = num % 26;
    const stringArr = str.toLowerCase().split("");
    const charArr = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let charCollect = '';

    stringArr.forEach(char => {
        
        if(char === " "){
            charCollect += char;
            
        }

        let strIndex = str.indexOf(char)
        let charIndex = (charArr.indexOf(char)) + num;
        if(charIndex > 25) charIndex = charIndex - 26;
        if(charIndex < 0) charIndex = 26 + charIndex;

        if(char === str[strIndex]){
            charCollect += charArr[charIndex];
        } else{
        charCollect += charArr[charIndex].toUpperCase();
        }
        
    });
    console.log(charCollect)
}

caesarCipher("Ab c", -900)