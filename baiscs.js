// Variables
let firstName = "John";
let age = 25;

// Displaying variables
console.log("Name: " + firstName);
console.log("Age: " + age);



// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}


// Array declaration and initialization
let colors = ["Red", "Green", "Blue"];

// Accessing and modifying array elements
console.log("First color: " + colors[0]);
colors[1] = "Yellow";
console.log("Updated colors: " + colors.join(", "));


// If-else statement
let temperature = 20;
if (temperature > 25) {
    console.log("It's a hot day!");
} else if (temperature > 15) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a cold day!");
}

// Switch statement
let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}


// String literal
let greeting = "Hello, World!";

// Displaying the string
console.log(greeting);
   

// Numeric literal
let number = 42;

// Displaying the number
console.log("The answer to life, the universe, and everything is: " + number);


// Boolean literals
let isTrue = true;
let isFalse = false;

// Displaying boolean values
console.log("isTrue: " + isTrue);
console.log("isFalse: " + isFalse);


// Object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Displaying object properties
console.log("Person: ", person);


// Array literal
let colors = ["Red", "Green", "Blue"];

// Displaying array elements
console.log("Colors: " + colors.join(", "));


// Template literal
let name = "Alice";
let greetingMessage = `Hello, ${name}!`;

// Displaying the template literal
console.log(greetingMessage);
 

// Template literal
let name = "Alice";
let age = 25;

// String interpolation using a template literal
let greetingMessage = `Hello, ${name}! You are ${age} years old.`;

// Displaying the template literal
console.log(greetingMessage);
