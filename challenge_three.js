// Write a function that can take any  non-negative
// integer as argument and return it  with its digits in
// descending order.
// # 21445 => 54421
// # 145263 => 653321

const arrageNumberDescOrder = number => {
    if(number < 0) return -1;
    const numberArray = String(number).split('');
    let arragedDescNumber = numberArray.sort((a, b) => Number(a) < Number(b));
    return arragedDescNumber.join('');
}

console.log(arrageNumberDescOrder('21445')); //54421
console.log(arrageNumberDescOrder('145263')); //653321