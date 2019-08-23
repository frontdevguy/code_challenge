//Algebbra.js

class Algebra {
    calculateFactors(integer) {
        const factors = [];
        for(let i = 1; i <= integer; i++ ) {
            if ( integer % i === 0 ) factors.push(i);
        }
        return factors;
    }

    getCommonFactors(arr_1, arr_2) {
        return arr_1.filter((integer) => arr_2.includes(integer));
    }

    getHighestValue(arr) {
        return arr.reduce(
            (prev_value,curr_value) => prev_value > curr_value ? prev_value : curr_value, arr[0]
        );
    }

    calculateGCD(integer_one, integer_two) {
        const integer_one_factors = this.calculateFactors(integer_one);
        const integer_two_factors = this.calculateFactors(integer_two);
        const common_factors = this.getCommonFactors(integer_one_factors,integer_two_factors)
        const gcd = this.getHighestValue(common_factors);
        return gcd;
    }
}

console.log(new Algebra().calculateGCD(60,200)); //20