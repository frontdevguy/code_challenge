// Wtite a program that calculates the number of trailling zeros
// in a factorial of a given number
// #6! = 1*2*3*4*5*6 = 720 ---> 1 trailling zero

const factorial = number => {
    if(number > 1) return number * factorial(number - 1);
    return 1;
}

const getTrailingZero = number => {
    const numberArray = String(factorial(number)).split('').reverse();
    for(number of numberArray) {
        if(Number(number) > 0) return numberArray.indexOf(number)
    }
    return 0;
}

console.log(getTrailingZero(12));
// 2