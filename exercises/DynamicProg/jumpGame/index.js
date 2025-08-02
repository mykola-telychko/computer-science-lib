// Складність: O(n) за часом, O(1) за пам'яттю 
// ua-explanation https://claude.ai/share/e733267f-b6f7-421c-9b19-5539c2370a80

var canJump = function(nums) {
    let farthest = 0; // Initialize the farthest index that can be reached

    for (let i = 0; i < nums.length; i++) {
        // If the current index is beyond the farthest index that can be reached, return false
        if (i > farthest) {
            return false;
        }

        // Update the farthest index that can be reached
        farthest = Math.max(farthest, i + nums[i]);

        // If the farthest index is already at or beyond the last index, return true
        if (farthest >= nums.length - 1) {
            return true;
        }
    }

    // check if the farthest index is at or beyond the last index
    return farthest >= nums.length - 1;
};

// Example usage:
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
console.log(canJump([3, 2, 1, 0, 4])); // Output: false
