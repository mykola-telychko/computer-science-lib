/**
 * @param {number[]} nums
 * @param {function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accumulator = init;
    for (let i = 0; i < nums.length; i++) {
        accumulator = fn(accumulator, nums[i]);
    }
    return accumulator;
};

const numsArr1 = [1, 2, 3, 4];
const sumFn = (accum, curr) => accum + curr;
const init1 = 0;
console.log(reduce(numsArr1, sumFn, init1)); // Output: 10

const numsArr2 = [1, 2, 3, 4];
const sumOfSquaresFn = (accum, curr) => accum + curr * curr;
const init2 = 100;
console.log(reduce(numsArr2, sumOfSquaresFn, init2)); // Output: 130

const numsArr3 = [];
const dummyFn = (accum, curr) => 0;
const init3 = 25;
console.log(reduce(numsArr3, dummyFn, init3)); // Output: 25