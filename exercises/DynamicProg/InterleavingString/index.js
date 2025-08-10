/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const len1 = s1.length;
    const len2 = s2.length;
    const len3 = s3.length;

    // If the combined length of s1 and s2 is not equal to the length of s3, return false
    if (len1 + len2 !== len3) {
        return false;
    }

    // Create a DP table to store results of subproblems
    const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(false));

    // Base case: empty s1 and s2 can form empty s3
    dp[0][0] = true;

    // Fill the first row: only s2 is used
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the first column: only s1 is used
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // Fill the rest of the DP table
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
                       (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    return dp[len1][len2];
};
