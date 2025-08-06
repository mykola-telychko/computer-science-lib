/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Create a 2D array to store the minimum path sum to reach each cell
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the starting point
    dp[0][0] = grid[0][0];

    // Fill the first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Fill the first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // Fill the rest of the dp array
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // The value in dp[m-1][n-1] is the minimum path sum
    return dp[m - 1][n - 1];
};

// Example usage:
const grid1 = [[1,3,1],[1,5,1],[4,2,1]];
console.log(minPathSum(grid1)); // Output: 7

const grid2 = [[1,2,3],[4,5,6]];
console.log(minPathSum(grid2)); // Output: 12
