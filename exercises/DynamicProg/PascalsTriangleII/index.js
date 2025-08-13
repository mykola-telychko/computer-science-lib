/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        // Move from the end to the beginning to avoid overwriting values prematurely
        for (let j = row.length - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        row.push(1); // Each row ends with 1
    }
    return row;
};