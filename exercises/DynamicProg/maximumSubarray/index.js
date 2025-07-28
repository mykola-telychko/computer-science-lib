/**
 * Solution 1: Kadane's Algorithm - O(n) time, O(1) space
 * The key insight is that at each position, we decide whether to:
 * 1. Start a new subarray from current element, or
 * 2. Extend the existing subarray by including current element
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // Either start new subarray or extend existing one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
};

/**
 * Solution 2: Divide and Conquer - O(n log n) time, O(log n) space
 * The maximum subarray is either:
 * 1. Entirely in the left half
 * 2. Entirely in the right half  
 * 3. Crosses the middle (spans both halves)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayDivideConquer = function(nums) {
    function maxSubArrayHelper(nums, left, right) {
        // Base case: single element
        if (left === right) {
            return nums[left];
        }
        
        const mid = Math.floor((left + right) / 2);
        
        // Maximum subarray in left half
        const leftMax = maxSubArrayHelper(nums, left, mid);
        
        // Maximum subarray in right half
        const rightMax = maxSubArrayHelper(nums, mid + 1, right);
        
        // Maximum subarray crossing the middle
        let leftSum = Number.NEGATIVE_INFINITY;
        let sum = 0;
        // Find max sum ending at mid (going left)
        for (let i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }
        
        let rightSum = Number.NEGATIVE_INFINITY;
        sum = 0;
        // Find max sum starting at mid+1 (going right)
        for (let i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }
        
        const crossSum = leftSum + rightSum;
        
        // Return maximum of all three possibilities
        return Math.max(leftMax, rightMax, crossSum);
    }
    
    return maxSubArrayHelper(nums, 0, nums.length - 1);
};

// Test cases
console.log("=== Kadane's Algorithm Tests ===");
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23
console.log(maxSubArray([-1])); // Expected: -1
console.log(maxSubArray([-2,-1])); // Expected: -1

console.log("\n=== Divide and Conquer Tests ===");
console.log(maxSubArrayDivideConquer([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArrayDivideConquer([1])); // Expected: 1
console.log(maxSubArrayDivideConquer([5,4,-1,7,8])); // Expected: 23
console.log(maxSubArrayDivideConquer([-1])); // Expected: -1
console.log(maxSubArrayDivideConquer([-2,-1])); // Expected: -1

/**
 * Alternative implementation of Kadane's Algorithm with more explicit logic
 */
var maxSubArrayAlternative = function(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // If previous sum is negative, start fresh
        if (maxEndingHere < 0) {
            maxEndingHere = nums[i];
        } else {
            maxEndingHere += nums[i];
        }
        
        // Update global maximum
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
        }
    }
    
    return maxSoFar;
};

console.log("\n=== Alternative Kadane's Tests ===");
console.log(maxSubArrayAlternative([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6