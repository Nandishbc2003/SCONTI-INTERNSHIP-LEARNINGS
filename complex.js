// Async/Await, Promises, and Closures Example

// Function returning a promise
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { success: true, message: "Data fetched successfully" };
            resolve(data);
            // Uncomment the line below to simulate a rejection
            // reject(new Error("Failed to fetch data"));
        }, 2000);
    });
}

// Async function using async/await
async function fetchDataWithAsync(url) {
    try {
        const result = await fetchData(url);
        console.log(result.message);
        return result;
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}

// Closure example
function outerFunction() {
    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();

// Using the closure
closureFunction();

// Invoking the async function
fetchDataWithAsync("https://api.example.com/data")
    .then((result) => {
        console.log("Async Function Result:", result);
    })
    .catch((error) => {
        console.error("Async Function Error:", error);
    });


