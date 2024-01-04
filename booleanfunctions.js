// Boolean functions
let isEven = function (num) {
    return num % 2 === 0;
};

let isGreaterThanTen = function (num) {
    return num > 10;
};

// Using boolean functions
let num1 = 8;
let num2 = 15;

console.log(`${num1} is even: ${isEven(num1)}`);
console.log(`${num2} is greater than ten: ${isGreaterThanTen(num2)}`);
