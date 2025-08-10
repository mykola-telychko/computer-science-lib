/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const m = s.length;
    const n = t.length;

    // dp[i][j] is the number of distinct subsequences of s[0...i-1] that equal t[0...j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialization: An empty string t can always be formed in 1 way (by deleting all characters)
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If the characters match, we have two choices:
            // 1. Use s[i-1] to match t[j-1]. This contributes dp[i-1][j-1] ways.
            // 2. Don't use s[i-1]. This contributes dp[i-1][j] ways.
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // If characters don't match, we can't use s[i-1] to match t[j-1].
                // The number of ways is the same as the previous step in s.
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
};