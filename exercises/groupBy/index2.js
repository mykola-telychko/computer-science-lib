/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        
        if (result[key] === undefined) {
            result[key] = [];
        }
        
        result[key].push(this[i]);
    }
    
    return result;
};

// Test cases to verify the implementation
console.log("Example 1:");
const array1 = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
];
const fn1 = function (item) { 
    return item.id; 
};
console.log(array1.groupBy(fn1));
// Expected: { "1": [{"id": "1"}, {"id": "1"}], "2": [{"id": "2"}] }

console.log("\nExample 2:");
const array2 = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
];
const fn2 = function (list) { 
    return String(list[0]); 
};
console.log(array2.groupBy(fn2));
// Expected: { "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] }

console.log("\nExample 3:");
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fn3 = function (n) { 
    return String(n > 5);
};
console.log(array3.groupBy(fn3));
// Expected: { "true": [6, 7, 8, 9, 10], "false": [1, 2, 3, 4, 5] }

console.log("\nAdditional test - String groupBy:");
console.log([1, 2, 3].groupBy(String));
// Expected: {"1":[1],"2":[2],"3":[3]}

console.log("\nEdge case - Empty array:");
console.log([].groupBy(String));
// Expected: {}