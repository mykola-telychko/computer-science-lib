// -- Синхронний варіант не гарантує порядок завершення.

// ++ Асинхронний варіант з async/await виконує все по черзі, очікуючи завершення кожної операції.




// Обгортаємо старі callback-методи в Promises
function processDataAsync(data) {
    return new Promise(resolve => {
        exampleObject.processData(data, resolve);
    });
}

function delayedMsgAsync(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

function fetchDataAsync(url) {
    return new Promise((resolve, reject) => {
        exampleObject.fetchData(url, resolve, reject);
    });
}

function complexOperationAsync(input) {
    return new Promise(resolve => {
        exampleObject.complexOperation(input, resolve);
    });
}

// Основна async-функція, яка виконує все по черзі
async function runSequentially() {
    console.log(exampleObject.greet("Alice"));

    const processed = await processDataAsync("test data");
    console.log("Processed data:", processed);

    await delayedMsgAsync("msg is delayed by 2sec", 2000);

    try {
        const data = await fetchDataAsync("https://mykola-telychko.github.io/drg-store/list.json");
        console.log("Data fetched successfully:", data);
    } catch (err) {
        console.log("Error fetching data:", err);
    }

    const result = await complexOperationAsync(5);
    console.log("Final result:", result);
}

runSequentially();
