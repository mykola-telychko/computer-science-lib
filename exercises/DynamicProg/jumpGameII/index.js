/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;
    
    let jumps = 0;
    let maxReach = nums[0];
    let steps = nums[0];
    
    for (let i = 1; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        steps--;
        
        if (steps === 0) {
            jumps++;
            steps = maxReach - i;
        }
    }
    
    return jumps + 1;
};