/**
 * @param {Function[]} functions
 * @return {Function}
 */
function compose(functions) {
  return function(x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

const functions = [
  x => x + 1,
  x => x * x,
  x => 2 * x
];

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x]

const composed = compose(functions);
console.log(composed(4)); // 65

const composed1 = compose(functions2);
console.log(composed1(3)); // 42

const composed2 = compose([]);
console.log(composed2(42)); // 42

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */