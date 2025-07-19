/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

chunk([1, 2, 3, 4, 5], 2); 
// [[1, 2], [3, 4], [5]]

chunk([1, 9, 6, 3, 2], 3); 
// [[1, 9, 6], [3, 2]]

chunk([], 1); 
// []
