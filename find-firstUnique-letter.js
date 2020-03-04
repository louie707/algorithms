let s = "leetcodelt";

// first way using forEach loop
// var firstUniqChar = function(s) {
//     const letters = s.split("");
//     let hash = {};

//     letters.forEach(letter => {
//         if(!hash[letter]){
//             hash[letter] = 0;
//         }
//         hash[letter]++;
//     })

//     for(i = 0; i < s.length; i++){
//         if(hash[s[i]] === 1){
//             console.log(s[i])
//             return i
//         } 
//     }  
//     return -1;
// };
// console.log(firstUniqChar(s));

// Using for loop
// const firstUniqChar = (s) =>{
//     const hash = {};

//     for(a = 0; a < s.length; a++){
//         if(!hash[s[a]]){
//             hash[s[a]] = 0;
//         }
//         hash[s[a]]++;
//     }
    
//     console.log(hash)
//     for(b = 0; b < s.length; b++){
//         if(hash[s[b]] == 1){
//             console.log(s[b])
//             return b;
//         }
//     }
//     return -1;
// };

// console.log(firstUniqChar(s))