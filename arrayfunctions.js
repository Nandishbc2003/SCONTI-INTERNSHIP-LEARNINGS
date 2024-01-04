// Array functions
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function (num) {
    return num * 2;
});

let sumOfNumbers = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

// Displaying the results
console.log("Doubled Numbers:", doubledNumbers);
console.log("Sum of Numbers:", sumOfNumbers);
console.log("Even Numbers:", evenNumbers);
