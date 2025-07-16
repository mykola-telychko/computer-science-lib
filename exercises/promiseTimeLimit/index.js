/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return Promise.race([
            fn(...args), // The original function
            new Promise((_, reject) =>
                setTimeout(() => reject("Time Limit Exceeded"), t)
            )
        ]);
    };
};

const fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
};

const limited = timeLimit(fn, 50);

const start = performance.now();
limited(5)
  .then(res => console.log({ resolved: res, time: Math.floor(performance.now() - start) }))
  .catch(err => console.log({ rejected: err, time: Math.floor(performance.now() - start) }));
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */