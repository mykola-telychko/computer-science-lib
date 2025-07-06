/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filteri = function(arr, fn) {
    return fn(arr);
};

let objFns = {
   greaterThan10: function(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
          result.push(arr[i]);
        }
      }
      return result;
   }, 
   firstIndex: function(arr) {
      return arr[0];
   }, 
   plusOne: function(arr) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] !== 0) {  // Виправлена умова (arr[i] замість arr[val])
          result.push(arr[i] + 1);
        }
      }
      return result;
   }
}

let arNums = [20, 12, 10, -2, -1, 0, 1, 2];

console.log(filteri(arNums, objFns.greaterThan10)); // [20, 12]
console.log(filteri(arNums, objFns.firstIndex));    // 20
console.log(filteri(arNums, objFns.plusOne));       // [21, 13, 2, 3]