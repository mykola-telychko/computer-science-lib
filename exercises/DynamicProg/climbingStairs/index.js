/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }

    // Create a DP array to store the number of ways to reach each step
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    // Fill the DP array
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // The value in dp[n] is the number of distinct ways to climb to the top
    return dp[n];
};

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
