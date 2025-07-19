/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // Check if the object is an array
    if (Array.isArray(obj)) {
        // Return true if the array has no elements
        return obj.length === 0;
    } else {
        // Return true if the object has no keys
        return Object.keys(obj).length === 0;
    }
};

// Example usage:
console.log(isEmpty({"x": 5, "y": 42})); // Output: false
console.log(isEmpty({})); // Output: true
console.log(isEmpty([null, false, 0])); // Output: false
