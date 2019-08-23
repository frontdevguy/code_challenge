// Write a porgram that returns the input (which is an integer)
// as a string in expanded form.
// # 12 => 10 + 2
// # 421 => 400 + 20 + 1
// # 70304 => 7000 + 300 + 4

const numberOfZeroes = zeroes => {
    let zeroesString = '';
    for(let i=1; i<=zeroes; i++) {
        zeroesString += '0';
    }
    return zeroesString;
}

const destructNumberToPlaceValue = number => {
    const numberArray = String(number).split('').reverse();
    let destructedNumbePlaceValueArray = [];
    for( numberPlaceValue in numberArray ) {
        if (numberArray[numberPlaceValue] > 0) {
            destructedNumbePlaceValueArray.push(`${
			numberArray[numberPlaceValue]
		}${numberOfZeroes(numberPlaceValue)}`);
        }
    }
    return destructedNumbePlaceValueArray.reverse().join(' + ');
}

console.log(String(destructNumberToPlaceValue(12)));
console.log(String(destructNumberToPlaceValue(421)));
console.log(String(destructNumberToPlaceValue(70304)));