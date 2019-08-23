// Given an array of integers, find an index N
// where the sum of the integers to the left of N
// is equal to the sum of the integers to the right 
// of N
// # [1, 2, 3, 4, 3, 2, 1] => 3
// # [1,100,50,-51,1,1] => 1

const atWhatIndexIsEqualSum = intArray => {
    if(intArray.length == 1) return intArray[0];
    for(index in intArray) {
        if(index == 0) continue;
        if(index == intArray.length - 1) break;
        const _array = [...intArray];
        const leftSum = _array.splice(0, index).reduce((total,number) => total+=number,0);
        const rightSum = _array.splice(1).reduce((total,number) => total+=number,0);
        if(leftSum == rightSum) return index;
    }
    return -1;
}

console.log(atWhatIndexIsEqualSum([1, 2, 3, 4, 3, 2, 1])); //3
console.log(atWhatIndexIsEqualSum([1,100,50,-51,1,1])); // 1