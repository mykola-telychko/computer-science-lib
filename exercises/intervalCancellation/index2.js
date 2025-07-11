/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    
    fn(...args);

    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearInterval(intervalId);
    };

    return cancelFn;
}

const start = Date.now();
const output = [];

const fn = (x) => {
    const result = x * 2;
    output.push({ time: Date.now() - start, returned: result });
    return result;
};

const cancelTimeMs = 190;
const cancelFn = cancellable(fn, [4], 35);

setTimeout(() => {
    cancelFn();
    console.log(output); 
}, cancelTimeMs);

