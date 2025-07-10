/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args); // unique key for each kit args 
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args); 
        cache.set(key, result);     
        return result;
    };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5 (з кешу)
console.log(callCount);        // 1
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */