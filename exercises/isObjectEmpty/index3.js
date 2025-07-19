
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  
  return Object.keys(obj).length === 0;
};

console.log(isEmpty({}))                // true
console.log(isEmpty({"x": 1}))          // false
console.log(isEmpty([]))                // true
console.log(isEmpty([null, false]))     // false
console.log(isEmpty([{}]))              // false

