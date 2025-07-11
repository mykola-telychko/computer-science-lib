/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
// var cancellable = function(fn, args, t) {
    
// };
function cancellable(fn, args, t) {
    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    const cancelFn = () => {
        clearTimeout(timeoutId); // скасовує виконання, якщо ще не відбулося
    };

    return cancelFn;
}

const cancelTimeMs = 50;
const cancelFn1 = cancellable((x) => console.log(x * 5), [2], 20);
setTimeout(cancelFn1, cancelTimeMs); 

const cancelT50 = 50;
const cancelFn2 = cancellable((x) => console.log(x ** 2), [2], 100);
setTimeout(cancelFn2, cancelT50); 

const cancelT100 = 100;
const cancelFn3 = cancellable((x1, x2) => console.log(x1 * x2), [2, 4], 30);
setTimeout(cancelFn3, cancelT100); // виконається до скасування


/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */