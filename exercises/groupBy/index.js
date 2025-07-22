// Adds a non‑enumerable `groupBy` method to *all* arrays.
if (!Array.prototype.groupBy) {
  Object.defineProperty(Array.prototype, 'groupBy', {
    /**
     * Groups the array’s items by the key returned from `fn`.
     * @param {Function} fn – callback receiving (item, index, array) and returning a **string** key.
     * @returns {Object<string,Array>} an object whose properties are the keys produced by `fn`
     *                                 and whose values are arrays of the matching items.
     */
    value: function groupBy(fn) {
      const result = {};
      for (let i = 0; i < this.length; i++) {
        const key = fn(this[i], i, this);
        (result[key] ||= []).push(this[i]);   // create array lazily, then push
      }
      return result;
    },
    writable: true,
    configurable: true,
    enumerable: false      // keeps it out of for…in / Object.keys loops
  });
}

/* ----------------- Examples ----------------- */
const arr1 = [{ id: '1' }, { id: '1' }, { id: '2' }];
console.log(arr1.groupBy(item => item.id));
// ⇒ { "1": [{ id: "1" }, { id: "1" }], "2": [{ id: "2" }] }

const arr2 = [[1, 2, 3], [1, 3, 5], [1, 5, 9]];
console.log(arr2.groupBy(list => String(list[0])));
// ⇒ { "1": [[1,2,3],[1,3,5],[1,5,9]] }

const nums = [1,2,3,4,5,6,7,8,9,10];
console.log(nums.groupBy(n => String(n > 5)));
// ⇒ { "false": [1,2,3,4,5], "true": [6,7,8,9,10] }
