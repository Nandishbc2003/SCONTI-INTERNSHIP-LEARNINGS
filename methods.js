// Map function
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function (num) {
    return num * num;
});

// Displaying the result
console.log("Squared Numbers:", squaredNumbers);


// Reduce function
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// Displaying the result
console.log("Sum of Numbers:", sum);


// Filter function
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

// Displaying the result
console.log("Even Numbers:", evenNumbers);

