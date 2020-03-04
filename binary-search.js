const binarySearch = (numArray, key) => {
numArray.sort((a, b) => a - b);

let middleInx = Math.floor(numArray.length /2);
let middleInxElem = numArray[middleInx];
console.log(numArray)

console.log(numArray.splice(4));
console.log(numArray)
if(middleInxElem === key) return true;
else if(middleInxElem < key && numArray.length > 1){
    return binarySearch(numArray.splice(middleInx), key);
}
else if(middleInxElem > key && numArray.length > 1){
    return binarySearch(numArray.splice(0, middleInx), key)
}
else return false;
};

console.log(binarySearch([7,5,12,56,16,36,42,39,71], 56));

// const number = [1,2,3,4,5,6,7];
// number.splice(2,3);
// console.log(number);