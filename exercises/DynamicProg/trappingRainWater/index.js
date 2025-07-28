/**
 * Calculates the amount of water that can be trapped after raining,
 * given an elevation map represented by an array of non-negative integers.
 * The width of each bar is 1.
 *
 * @param {number[]} height - An array of non-negative integers representing the elevation map.
 * @return {number} - The total units of rain water trapped.
 */
var trap = function(height) {
    // If the height array is empty or has less than 3 elements, no water can be trapped.
    // A minimum of 3 bars is needed to potentially trap water (e.g., [1,0,1]).
    if (!height || height.length < 3) {
        return 0;
    }

    let left = 0; // Pointer starting from the left end of the array
    let right = height.length - 1; // Pointer starting from the right end of the array
    let leftMax = 0; // Keeps track of the maximum height encountered from the left
    let rightMax = 0; // Keeps track of the maximum height encountered from the right
    let trappedWater = 0; // Accumulator for the total trapped water

    // Iterate while the left pointer is less than or equal to the right pointer.
    // The loop continues until the pointers meet or cross.
    while (left <= right) {
        // If the height at the left pointer is less than or equal to the height at the right pointer,
        // it means the water level is limited by the left side for the current position.
        if (height[left] <= height[right]) {
            // If the current left bar is taller than or equal to the current leftMax,
            // update leftMax. This bar can act as a new boundary for trapping water.
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // If the current left bar is shorter than leftMax, it means water can be trapped
                // above this bar, up to the level of leftMax.
                trappedWater += leftMax - height[left];
            }
            // Move the left pointer to the right to process the next bar.
            left++;
        } else {
            // If the height at the right pointer is less than the height at the left pointer,
            // it means the water level is limited by the right side for the current position.
            // This logic is symmetrical to the left side.
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                // Water trapped is determined by rightMax and the current bar's height.
                trappedWater += rightMax - height[right];
            }
            // Move the right pointer to the left to process the next bar.
            right--;
        }
    }

    // Return the total calculated trapped water.
    return trappedWater;
};

// --- Example Usage ---

// Example 1:
console.log("Example 1:");
const height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const output1 = trap(height1);
console.log(`Input: [${height1}]`);
console.log(`Output: ${output1}`); // Expected: 6

// Example 2:
console.log("\nExample 2:");
const height2 = [4, 2, 0, 3, 2, 5];
const output2 = trap(height2);
console.log(`Input: [${height2}]`);
console.log(`Output: ${output2}`); // Expected: 9

// Additional Example: All elements same height
console.log("\nAdditional Example: All elements same height");
const height3 = [1, 1, 1, 1, 1];
const output3 = trap(height3);
console.log(`Input: [${height3}]`);
console.log(`Output: ${output3}`); // Expected: 0

// Additional Example: Decreasing then increasing
console.log("\nAdditional Example: Decreasing then increasing");
const height4 = [5, 4, 3, 2, 1, 2, 3, 4, 5];
const output4 = trap(height4);
console.log(`Input: [${height4}]`);
console.log(`Output: ${output4}`); // Expected: 16

// Additional Example: Empty array
console.log("\nAdditional Example: Empty array");
const height5 = [];
const output5 = trap(height5);
console.log(`Input: [${height5}]`);
console.log(`Output: ${output5}`); // Expected: 0

// Additional Example: Single element array
console.log("\nAdditional Example: Single element array");
const height6 = [10];
const output6 = trap(height6);
console.log(`Input: [${height6}]`);
console.log(`Output: ${output6}`); // Expected: 0
