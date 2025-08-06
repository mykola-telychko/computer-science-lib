Explanation

Edge Case Handling:

If the starting cell (0, 0) is an obstacle (obstacleGrid[0][0] === 1), no paths are possible, so return 0.
Set obstacleGrid[0][0] = 1 if it’s not an obstacle, as there is exactly one way to reach the starting point (stay there).


Initialize First Row and Column:

For the first row (i = 0), each cell (0, j) can only be reached from the left (0, j-1). If the current cell is not an obstacle and the previous cell has a valid path, set obstacleGrid[0][j] = obstacleGrid[0][j-1]; otherwise, set it to 0.
Similarly, for the first column (j = 0), each cell (i, 0) can only be reached from above (i-1, 0). If the current cell is not an obstacle and the cell above has a valid path, set obstacleGrid[i][0] = obstacleGrid[i-1][0]; otherwise, set it to 0.


Fill the DP Table:

For each cell (i, j) where i >= 1 and j >= 1:

If the cell is not an obstacle (obstacleGrid[i][j] === 0), the number of paths to reach it is the sum of paths from above (obstacleGrid[i-1][j]) and from the left (obstacleGrid[i][j-1]).
If the cell is an obstacle (obstacleGrid[i][j] === 1), set obstacleGrid[i][j] = 0, as no paths can pass through it.




Result:

The value in obstacleGrid[m-1][n-1] represents the number of unique paths to the bottom-right corner.



Time and Space Complexity

Time Complexity: O(m * n), where m is the number of rows and n is the number of columns. We iterate through each cell in the grid once.
Space Complexity: O(1), since we modify the input obstacleGrid in-place to store the DP values, using no extra space beyond a few variables.

Example Walkthrough
Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]

m = 3, n = 3
Initialize: obstacleGrid[0][0] = 1
First row: [1, 1, 1] (all cells are 0, so each gets the value from the left)
First column: [1, 1, 1] (all cells are 0, so each gets the value from above)
Fill the grid:

(1,1) is an obstacle, so obstacleGrid[1][1] = 0
(1,2): obstacleGrid[1][2] = obstacleGrid[0][2] + obstacleGrid[1][1] = 1 + 0 = 1
(2,1): obstacleGrid[2][1] = obstacleGrid[1][1] + obstacleGrid[2][0] = 0 + 1 = 1
(2,2): obstacleGrid[2][2] = obstacleGrid[1][2] + obstacleGrid[2][1] = 1 + 1 = 2


Output: 2

Example 2:
Input: obstacleGrid = [[0,1],[0,0]]

m = 2, n = 2
Initialize: obstacleGrid[0][0] = 1
First row: [1, 0] (second cell is an obstacle)
First column: [1, 1] (both cells are 0)
Fill the grid:

(1,1): obstacleGrid[1][1] = obstacleGrid[0][1] + obstacleGrid[1][0] = 0 + 1 = 1


Output: 1

Constraints Handling

The grid dimensions are 1 <= m, n <= 100, so the solution handles small to moderately sized grids efficiently.
The answer is guaranteed to be less than or equal to 2 * 10^9, which fits within a 32-bit integer, so no overflow handling is needed in JavaScript for the given constraints.
The grid contains only 0s (spaces) and 1s (obstacles), which is handled by checking obstacleGrid[i][j] === 0 for valid cells.

This solution efficiently computes the number of unique paths while respecting the constraints and handling obstacles correctly.