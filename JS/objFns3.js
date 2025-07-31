// виконання не дивлячись на таут

const exampleObject = {
    // This function is synchronous and doesn't need to be changed
    greet: function(name) {
        return `Hi, ${name}!`;
    },

    // Refactored to return a Promise
    processData: function(data) {
        return new Promise((resolve) => {
            console.log("Processing data...");
            setTimeout(() => {
                const processedData = data.toUpperCase();
                console.log("Data processing completed.");
                resolve(processedData);
            }, 1000);
        });
    },

    // Refactored to return a Promise
    delayedMsg: function(message, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Delayed message received: "${message}"`);
                resolve();
            }, delay);
        });
    },

    // Refactored to use Promise chain directly
    fetchData: function(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });
    },

    // Refactored to return a Promise, handling a nested timeout
    complexOperation: function(input) {
        return new Promise((resolve) => {
            console.log("Starting complex operation...");
            setTimeout(() => {
                console.log("Phase 1 completed");
                setTimeout(() => {
                    console.log("Phase 2 completed");
                    const result = input * 2;
                    console.log("Complex operation finished.");
                    resolve(result);
                }, 1000);
            }, 1000);
        });
    }
};

// --- Execution of the code sequentially using async/await ---

async function runSequentialOperations() {
    try {
        console.log("--- Starting sequential execution ---");

        // Step 1: Synchronous function call
        const greeting = exampleObject.greet("Alice");
        console.log(greeting);

        // ---
        // Step 2: Wait for processData to complete
        // The 'await' keyword pauses execution until the Promise resolves.
        const processed = await exampleObject.processData("test data");
        console.log("Result from processData:", processed);

        // ---
        // Step 3: Wait for delayedMsg to complete
        await exampleObject.delayedMsg("msg is delayed by 2sec", 2000);

        // ---
        // Step 4: Wait for fetchData to complete
        // Using await with fetch is clean and readable.
        // We handle potential errors with a 'try...catch' block.
        const fetchedData = await exampleObject.fetchData("https://mykola-telychko.github.io/drg-store/list.json");
        console.log("Data fetched successfully:", fetchedData);

        // ---
        // Step 5: Wait for complexOperation to complete
        const finalResult = await exampleObject.complexOperation(5);
        console.log("Final result from complexOperation:", finalResult);

        console.log("\n--- All operations completed sequentially ---");

    } catch (error) {
        console.error("An error occurred during execution:", error);
    }
}

// Call the main async function to start the process
runSequentialOperations();
