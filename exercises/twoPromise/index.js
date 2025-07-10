/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and get their values
    const value1 = await promise1;
    const value2 = await promise2;
    
    // Return the sum
    return value1 + value2;
};

// Alternative solution using Promise.all()
var addTwoPromisesAlt = function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([value1, value2]) => {
        return value1 + value2;
    });
};

// Test cases
console.log("=== Test Case 1 ===");
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2)
    .then(result => console.log(`Result: ${result}`)); // Expected: 7

console.log("=== Test Case 2 ===");
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise3, promise4)
    .then(result => console.log(`Result: ${result}`)); // Expected: -2

console.log("=== Test Case 3 (Immediate) ===");
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(result => console.log(`Result: ${result}`)); // Expected: 4

console.log("=== Testing Alternative Solution ===");
addTwoPromisesAlt(Promise.resolve(15), Promise.resolve(25))
    .then(result => console.log(`Alternative Result: ${result}`)); // Expected: 40

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */