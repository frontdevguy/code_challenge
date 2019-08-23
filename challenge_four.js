// Implement a function that gets two binary numbers 
// as strings and returns their sum in hexadecimal
// # '110' + '101' => B
// # '1000' + '1010' => 12

// NOTE: Some part of this script has been sourced from
// 		https://stackoverflow.com/questions/40353000/javascript-add-two-binary-numbers-returning-binary

const xor = (a, b) => a === b ? 0 : 1;

const and = (a, b) => a == 1 && b == 1 ? 1 : 0;

const or = (a, b) =>  a || b;

const halfAdder = (a, b) => {
	const sum = xor(a, b);
	const carry = and(a, b);
	return [sum, carry];
}

const fullAdder = (a, b, carry) => {
	halfAdd = halfAdder(a, b);
	const sum = xor(carry, halfAdd[0]);
	carry = and(carry, halfAdd[0]);
	carry = or(carry, halfAdd[1]);
	return [sum, carry];
}

const padZeroes = (a, b) => {
	const lengthDifference = a.length - b.length;
	switch (lengthDifference) {
		case 0:
			break;
		default:
			const zeroes = Array.from(
				Array(Math.abs(lengthDifference)),
				() => String(0)
			);
			if (lengthDifference > 0) {
				b = `${zeroes.join('')}${b}`;
			} else {
				a = `${zeroes.join('')}${a}`;
			}
	}
	return [a, b];
}

const addBinary = (a_, b_) => {
    let [a,b] = [String(a_), String(b_)];
	let sum = '';
	let carry = '';

	const paddedInput = padZeroes(a, b);
	a = paddedInput[0];
	b = paddedInput[1];

	for (let i = a.length - 1; i >= 0; i--) {
		if (i == a.length - 1) {
			const halfAdd1 = halfAdder(a[i], b[i]);
			sum = halfAdd1[0] + sum;
			carry = halfAdd1[1];
		} else {
			const fullAdd = fullAdder(a[i], b[i], carry);
			sum = fullAdd[0] + sum;
			carry = fullAdd[1];
		}
	}
	return carry ? carry + sum : sum;
}


const getHexadecimal = (a,b) =>
	parseInt(addBinary(a,b), 2)
		.toString(16)
        .toUpperCase();
        
console.log(getHexadecimal(110, 101)); // B
console.log(getHexadecimal(1000, 1010)); // 12