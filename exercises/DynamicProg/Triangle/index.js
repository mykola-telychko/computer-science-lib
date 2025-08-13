/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Start from the second-last row and go upwards
    for (let row = triangle.length - 2; row >= 0; row--) {
        for (let col = 0; col < triangle[row].length; col++) {
            triangle[row][col] += Math.min(
                triangle[row + 1][col],
                triangle[row + 1][col + 1]
            );
        }
    }
    return triangle[0][0];
};
