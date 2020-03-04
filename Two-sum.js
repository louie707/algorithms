// O(n^2)
// const twoSum = (numArray, Sum) => {
//     let pairs = [];
//     for(let i = 0; i <= numArray.length -1; i++){
//         for(let j = 0; j <= i; j++){
//             if((numArray[i] + numArray[j]) === Sum){
//                 pairs.push([numArray[i], numArray[j]]);
//             }
//         }
//     }
//     return pairs;
// };

// const numArray = [1, 6, 4, 5, 3, 3];
// const sum = 7;

// console.log(twoSum(numArray, sum));

// O(n)
// const twoSum = (newArray, sum) => {
// let pairs = [];
// let hash = [];

// newArray.forEach((num, i) => {
//     let currNum = numArray[i];
//     let counterpart = sum - currNum;
    
//     hash.push(currNum);

//     if(hash.indexOf(counterpart) !== -1){
//         pairs.push([currNum, counterpart]);
//     }
// });
//     console.log(hash)
//     return pairs;
// };

// const numArray = [1, 6, 4, 5, 3, 3];
// const sum = 7;

// console.log(twoSum(numArray, sum));

// var reverse = function(x) {
//     const nums = x.toString().split("");
//     nums.sort((a,b) => a -b);
    
//     let hash = [];

//     if(x == 0) return x
//     for(let i = nums.length -1; i >= 0; i--){
//         if(nums[i] > 0){
//             hash.push(nums[i])
//         }
//     }
//     if(x <= -1) return hash.join("") - (hash.join("") * 2);
//     else if(x >= 1) return hash.join("");
// };

// const x = 12305476980000;

// console.log(reverse(x));

// var twoSum = function(nums, target) {
// let pairs = [];
//     for(let i = 0; i <= nums.length -1; i++){
//         for(let j = nums.length -1; j >= i; j--){
//             if((nums[i] + nums[j]) == target) pairs.push([nums.indexOf(nums[i]), nums.indexOf(nums[j])])
//         }
//     }
//     return pairs;
// }

// const val = [2, 7, 11, 15];
// const tar = 9;

// console.log(twoSum(val, tar));

// var twoSum = function(nums, target) {
//     let hash = [];
        
//         for(let i = 0; i<nums.length; i++){
//             let currentNum = nums[i];
//             let counterPart = target - currentNum;
            
//             hash.push(nums[i]);
            
            
//             if(hash.indexOf(counterPart) !== -1){
//                 return [hash.indexOf(counterPart), i];
                
//             }
//         }
//     }

// const nums = [3,2,4];
// const target = 6;

// console.log(twoSum(nums,target))