// Function declaration
function addNumbers(a, b) {
    return a + b;
}

// Calling the function
let sum = addNumbers(5, 7);
console.log("Sum:", sum);

// Function expression
let multiplyNumbers = function(a, b) {
    return a * b;
};

// Calling the function
let product = multiplyNumbers(3, 4);
console.log("Product:", product);

// Arrow function
let subtractNumbers = (a, b) => a - b;

// Calling the function
let difference = subtractNumbers(10, 3);
console.log("Difference:", difference);


// Anonymous function assigned to a variable
let greet = function(name) {
    console.log("Hello, " + name + "!");
};

// Calling the function
greet("John");

 

// IIFE
(function() {
    console.log("This is an IIFE.");
})();


// Function with default parameters
function greetPerson(name = "Guest") {
    console.log("Hello, " + name + "!");
}

// Calling the function
greetPerson(); // Uses default parameter
greetPerson("Alice");


// Function with a rest parameter
function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Calling the function
let totalSum = sumNumbers(1, 2, 3, 4, 5);
console.log("Total Sum:", totalSum);
