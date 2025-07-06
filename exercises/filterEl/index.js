/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filteri = function(arr, fn) {
    return fn(arr);
};

let objFns = {
   greaterThan10: function(arr){
      return arr.reduce((accArr, val) => {
        if (val > 10) {
          accArr.push(val);
        }
        return accArr;
      }, []);
   }, 
   firstIndex: function(arr){
        return arr[0]
   }, 
   plusOne: function(arr){
      return arr.reduce((accArr, val) => {
        if (val > 0 && arr[val] !== 0) {
          accArr.push(val+1);
        }
        return accArr;
      }, []);
   }
}

let arNums = [20, 12, 10, -2,-1,0,1,2];

console.log(filteri(arNums, objFns.greaterThan10));
console.log(filteri(arNums, objFns.firstIndex));
console.log(filteri(arNums, objFns.plusOne));