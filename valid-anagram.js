const isAnagram = (s, t) => {
    const string1 = s.split("");
    const string2 = t.split("");
    let anagram = {};
    
    if (s.length != t.length){
        return false;
    }
    
    for(let i = 0; i <= s.length -1; i++){
        if(!anagram[string2[i]]){
            anagram[string2[i]] = 0;
        }
        anagram[string2[i]]++;
    }
    let result = true;
    string1.forEach(str => {
        if(anagram[str]){
            anagram[str]--;
            if(anagram[str] < 0){
                result = false;
            }
        }
        else {
            result = false;
        }
    })
    console.log(anagram)
    return result;
    
};
console.log(isAnagram("bab", "bba"));

// var isAnagram = function(s, t) {
//     if(s.split('').sort().join('') === t.split('').sort().join('')) {
//         return true;
//     }
    
//     return false;
// };