/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
function argumentsLength(...args) {
    return args.length;
}

// Example usage:
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3


/**
 * argumentsLength(1, 2, 3); // 3
 */