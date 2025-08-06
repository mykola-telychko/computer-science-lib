/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a DP table with m+1 rows and n+1 columns
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialize the first row (converting word1's empty prefix to word2's prefixes)
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Initialize the first column (converting word1's prefixes to word2's empty prefix)
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters match, no operation is needed for this step
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // If characters don't match, take the minimum cost of the three operations
                const insert = dp[i][j - 1] + 1;
                const del = dp[i - 1][j] + 1;
                const replace = dp[i - 1][j - 1] + 1;
                
                dp[i][j] = Math.min(insert, del, replace);
            }
        }
    }

    // The result is the value at the bottom-right corner of the table
    return dp[m][n];
};