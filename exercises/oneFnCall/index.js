/**
 * Creates a new function that calls the original function `fn` only once.
 * On the first call, it returns the result of `fn`.
 * On all subsequent calls, it returns `undefined`.
 *
 * @param {Function} fn - The original function to be called only once.
 * @returns {Function} - A new function that wraps `fn` with "once" logic.
 */
function once(fn) {
  let hasBeenCalled = false; // Flag that tracks whether the function has already been called
  let result; // Variable for storing the result of the first call

  // Return the new function (wrapper)
  return function(...args) {
    if (!hasBeenCalled) {
      // If the function has not been called yet
      hasBeenCalled = true; // Set the flag to true
      result = fn(...args); // Call the original function with all arguments
      return result; // Store and return its result
    } else {
      // If the function has already been called
      return undefined; // Return undefined
    }
  };
}

// --- Usage Examples ---

// Example 1: Sum of numbers
const sumFn = (a, b, c) => (a + b + c);
const onceSumFn = once(sumFn);

console.log("--- Приклад 1: Сума чисел ---"); // Example 1: Sum of numbers
const output1_1 = onceSumFn(1, 2, 3); // First call
console.log(`onceSumFn(1, 2, 3) -> ${output1_1}`); // Expected output: 6

const output1_2 = onceSumFn(2, 3, 6); // Second call
console.log(`onceSumFn(2, 3, 6) -> ${output1_2}`); // Expected output: undefined

const output1_3 = onceSumFn(10, 20, 30); // Third call
console.log(`onceSumFn(10, 20, 30) -> ${output1_3}`); // Expected output: undefined


// Example 2: Product of numbers
const productFn = (a, b, c) => (a * b * c);
const onceProductFn = once(productFn);

console.log("\n--- Приклад 2: Добуток чисел ---"); // Example 2: Product of numbers
const output2_1 = onceProductFn(5, 7, 4); // First call
console.log(`onceProductFn(5, 7, 4) -> ${output2_1}`); // Expected output: 140

const output2_2 = onceProductFn(2, 3, 6); // Second call
console.log(`onceProductFn(2, 3, 6) -> ${output2_2}`); // Expected output: undefined

const output2_3 = onceProductFn(4, 6, 8); // Third call
console.log(`onceProductFn(4, 6, 8) -> ${output2_3}`); // Expected output: undefined


// Example with a function that has side effects
let counter = 0;
const incrementFn = () => {
  counter++;
  return `Counter: ${counter}`;
};
const onceIncrementFn = once(incrementFn);

console.log("\n--- Приклад 3: Функція з побічним ефектом ---"); // Example 3: Function with side effect
console.log(onceIncrementFn()); // Expected output: Counter: 1
console.log(onceIncrementFn()); // Expected output: undefined
console.log(onceIncrementFn()); // Expected output: undefined
console.log(`Фінальне значення лічильника: ${counter}`); // Final counter value: 1
