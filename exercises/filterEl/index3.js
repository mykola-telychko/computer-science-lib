function filter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example 1
const arr1 = [0,10,20,30];
const fn1 = n => n > 10;
console.log(filter(arr1, fn1)); // [20,30]

// Example 2
const arr2 = [1,2,3];
const fn2 = (n, i) => i === 0;
console.log(filter(arr2, fn2)); // [1]

// Example 3
const arr3 = [-2,-1,0,1,2];
const fn3 = n => n + 1;
console.log(filter(arr3, fn3)); // [-2,0,1,2]