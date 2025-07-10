/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    let callCount = 0;

    const memoized = function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    memoized.getCallCount = function() {
        return callCount;
    };

    return memoized;
}

function runActions(fnName, actions, values) {
    let fn;

    if (fnName === "sum") {
        fn = (a, b) => a + b;
    } else if (fnName === "factorial") {
        fn = (n) => n <= 1 ? 1 : n * fn(n - 1);
    } else if (fnName === "fib") {
        fn = (n) => n <= 1 ? 1 : fn(n - 1) + fn(n - 2);
    }

    const memoizedFn = memoize(fn);
    const result = [];

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];
        if (action === "call") {
            result.push(memoizedFn(...value));
        } else if (action === "getCallCount") {
            result.push(memoizedFn.getCallCount());
        }
    }

    return result;
}

console.log(runActions(
  "sum",
  ["call", "call", "getCallCount", "call", "getCallCount"],
  [[2, 2], [2, 2], [], [1, 2], []]
)); // ➜ [4, 4, 1, 3, 2]






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