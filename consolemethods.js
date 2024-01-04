// Console Methods Example

// 1. Logging to the Console
console.log("Hello, World!");

// 2. Using String Substitution
let name = "John";
let age = 25;
console.log("My name is %s and I am %d years old.", name, age);

// 3. Styling Console Output
console.log("%cStyled Text", "color: blue; font-size: 16px;");

// 4. Asserting Conditions
console.assert(age >= 18, "You must be 18 or older.");

// 5. Logging Warnings
console.warn("This is a warning message!");

// 6. Logging Errors
console.error("This is an error message!");

// 7. Grouping Console Output
console.group("Group A");
console.log("Item 1");
console.log("Item 2");
console.groupEnd();

console.group("Group B");
console.log("Item 3");
console.log("Item 4");
console.groupEnd();

// 8. Timing Execution
console.time("Timer A");
for (let i = 0; i < 1000000; i++) {
    // Some operation
}
console.timeEnd("Timer A");

// 9. Counting Occurrences
for (let i = 0; i < 5; i++) {
    console.count("Loop Iteration");
}

// 10. Clearing the Console
// console.clear();

// 11. Displaying Objects
let person = { name: "Alice", age: 30, city: "Wonderland" };
console.dir(person);

// 12. Table Format
let tableData = [
    { name: "John", age: 25, city: "New York" },
    { name: "Jane", age: 28, city: "San Francisco" },
    { name: "Bob", age: 22, city: "Seattle" }
];
console.table(tableData);


// Console Methods Example (Continued)

// 13. Console Memory Profiling
console.memory;

// 14. Console TimeStamp
console.log("Message with timestamp", new Date());

// 15. Console Trace
function outerFunction() {
    innerFunction();
}

function innerFunction() {
    console.trace("Trace message:");
}

outerFunction();

// 16. Console Profile
function complexAlgorithm() {
    console.time("Algorithm Time");
    // Simulating a complex algorithm
    for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i);
    }
    console.timeEnd("Algorithm Time");
}

console.profile("Algorithm Profile");
complexAlgorithm();
console.profileEnd();

// 17. Console Global Properties
console.log("Window object:", console);

// 18. Console Exception
try {
    throw new Error("This is a custom error");
} catch (error) {
    console.error(error);
}

// 19. Console Mark Timeline
console.markTimeline("Start of Timeline");

// 20. Console Event Listener
console.addEventListener("click", function () {
    console.log("Console was clicked!");
});

// 21. Console Capture Stack Trace
function captureStackTrace() {
    console.log(new Error().stack);
}

captureStackTrace();

// 22. Console Table with Objects
let person1 = { name: "John", age: 25, city: "New York" };
let person2 = { name: "Alice", age: 30, city: "Wonderland" };
console.table([person1, person2]);

// 23. Console Table with Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.table([array1, array2]);

// 24. Console Table with Mixed Data
let mixedData = [{ name: "John", age: 25 }, [4, 5, 6], "Hello"];
console.table(mixedData);

// 25. Console JSON
let jsonData = { name: "Bob", age: 22, city: "Seattle" };
console.log("JSON Representation:", console.json(jsonData));

// 26. Console Keyboard Shortcuts
console.log("Press Ctrl + Shift + I to open Developer Tools");

// 27. Console Close
// console.close();

// 28. Console Change Theme
// console.log("%cStyled Text", "color: white; background-color: black;");

// 29. Console Change Font
// console.log("%cStyled Text", "font-family: 'Arial', sans-serif;");

// 30. Console Change Font Size
// console.log("%cStyled Text", "font-size: 24px;");

// Note: Uncomment or comment specific lines based on your preference or environment.
