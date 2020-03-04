const getMean = (arr) => {
let totalSum = 0;
    arr.forEach(eachSum => {
        totalSum += eachSum;
    });
    return totalSum / arr.length;
}

const getMedian = (arr) => {
arr.sort((a,b) => a-b);
    if((arr.length -1) % 2 ===0){
        return arr[(arr.length -1) / 2]
    }
    else{
        const right = Math.floor((arr.length -1) /2);
        const left = (arr.length) /2;
        const median = (arr[right] + arr[left]) /2;
        return median;
    }
}

const getMode = (arr) => {
    let countVal = {};
    arr.forEach(arrVal => {
        if(!countVal[arrVal]){
            countVal[arrVal] = 0;
        }
        countVal[arrVal]++;
    })
    let varFreq = 0;
    let mode = [];
    for (var num in countVal){
        if(countVal[num] > varFreq){
            mode =  [num];
            varFreq = countVal[num];
        }
        else if(countVal[num] === varFreq) mode.push(num);

        if(mode.length === Object.keys(countVal).length) mode = [];
    }
    return mode;
}

const MeanMideanMode = arr => {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }
}

const arr = [9,10,23,10,23,9];

console.log(MeanMideanMode(arr))