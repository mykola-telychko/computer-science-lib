const exampleObject = {
    greet: function(name) { return `Hi, ${name}!`; },

    processData: function(data, callback) {
        console.log("Processing data...");
        setTimeout(() => {
            const processedData = data.toUpperCase();
            callback(processedData);
        }, 1000);
    },

    delayedMsg: function(message, delay) {
        setTimeout(() => { console.log(message); }, delay);
    },

    fetchData: function(url, onSuccess, onError) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => onSuccess(data))
            .catch(error => onError(error.message));
    },

    complexOperation: function(input, callback) {
        console.log("Starting complex operation...");
        setTimeout(() => {
            console.log("Phase 1 completed");
            setTimeout(() => {
                console.log("Phase 2 completed");
                const result = input * 2;
                callback(result);
            }, 1000);
        }, 1000);
    }
};

console.log(exampleObject.greet("Alice")); 

exampleObject.processData("test data", (processed) => {
    console.log("Processed data:", processed); // Output after 1 sec: Processed data: TEST DATA
});

exampleObject.delayedMsg("msg is delayed by 2sec", 2000); // Output after 2 sec

exampleObject.fetchData(
    "https://mykola-telychko.github.io/drg-store/list.json",
    (data) => console.log("Data fetched successfully:", data),
    (error) => console.log("Error fetching data:", error)
);

exampleObject.complexOperation(5, (result) => {
    console.log("Final result:", result); // Output after 2 sec: Final result: 10
});