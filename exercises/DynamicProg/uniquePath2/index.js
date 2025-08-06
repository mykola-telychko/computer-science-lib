/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // If the starting point is an obstacle, no paths are possible
    if (obstacleGrid[0][0] === 1) return 0;
    
    // Initialize the first cell
    obstacleGrid[0][0] = 1;
    
    // Initialize first row
    for (let j = 1; j < n; j++) {
        obstacleGrid[0][j] = (obstacleGrid[0][j] === 0 && obstacleGrid[0][j-1] !== 0) 
            ? obstacleGrid[0][j-1] : 0;
    }
    
    // Initialize first column
    for (let i = 1; i < m; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i-1][0] !== 0) 
            ? obstacleGrid[i-1][0] : 0;
    }
    
    // Fill the DP table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }
    
    // Return the number of paths to the bottom-right corner
    return obstacleGrid[m-1][n-1];
};