/**
 * Calculate the number of structurally unique BST's (binary search trees)
 * which has exactly n nodes of unique values from 1 to n.
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // Initialize a dp array to store the number of unique BSTs for each number of nodes
    let dp = new Array(n + 1).fill(0);

    // Base case: there is 1 unique BST with 0 nodes (the empty tree)
    dp[0] = 1;

    // Fill the dp array using the Catalan number formula
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }

    return dp[n];
};
