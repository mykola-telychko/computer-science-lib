/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    // Store the input array in an instance property.
    this.nums = nums;
};

/**
 * This method is called when an ArrayWrapper instance is used in a primitive context,
 * such as with the '+' operator. It should return the sum of all elements in the array.
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // Sum all elements in the array.
    // The reduce method iterates over the array and accumulates a single result.
    // 'acc' is the accumulator (running total), 'curr' is the current element.
    // The initial value of the accumulator is 0.
    return this.nums.reduce((acc, curr) => acc + curr, 0);
};

/**
 * This method is called when the String() function is called on an ArrayWrapper instance.
 * It should return a comma-separated string of the array elements, surrounded by brackets.
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Convert the array to a string representation like "[1,2,3]".
    // JSON.stringify can convert an array to its string representation.
    return JSON.stringify(this.nums);
};

/**
 * Example Usage (as provided in the problem description):
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

// --- Example 1: Add operation ---
console.log("--- Example 1: Add Operation ---");
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
const sumResult = obj1 + obj2; // This implicitly calls valueOf() on both objects
console.log(`obj1 + obj2: ${sumResult}`); // Expected: 10

// --- Example 2: String operation ---
console.log("\n--- Example 2: String Operation ---");
const obj3 = new ArrayWrapper([23,98,42,70]);
const stringResult = String(obj3); // This explicitly calls toString()
console.log(`String(obj3): ${stringResult}`); // Expected: "[23,98,42,70]"

// --- Example 3: Add operation with empty arrays ---
console.log("\n--- Example 3: Add Operation with Empty Arrays ---");
const obj4 = new ArrayWrapper([]);
const obj5 = new ArrayWrapper([]);
const emptySumResult = obj4 + obj5;
console.log(`obj4 + obj5: ${emptySumResult}`); // Expected: 0

// --- Additional Example: Mixed operations ---
console.log("\n--- Additional Example: Mixed Operations ---");
const obj6 = new ArrayWrapper([10, 20]);
const obj7 = new ArrayWrapper([5]);
console.log(`String(obj6): ${String(obj6)}`); // Expected: "[10,20]"
console.log(`obj6 + obj7: ${obj6 + obj7}`); // Expected: 35 (10+20+5)
