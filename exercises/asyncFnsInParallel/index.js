/**
 * @param {Array<Function>} functions
 * @return {Promise<any[]>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    const n = functions.length;

    functions.forEach((fn, index) => {
      try {
        fn()
          .then(result => {
            results[index] = result;
            resolvedCount++;
            if (resolvedCount === n) {
              resolve(results);
            }
          })
          .catch(err => {
            reject(err);
          });
      } catch (err) {
        reject(err); // sync error 
      }
    });
  });
};

const functions = [
  () => new Promise(res => setTimeout(() => res(1), 200)),
  () => new Promise(res => setTimeout(() => res(2), 100)),
  () => new Promise(res => setTimeout(() => res(3), 300)),
];

promiseAll(functions)
  .then(console.log)  // [1, 2, 3]
  .catch(console.error);
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */