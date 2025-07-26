/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // Create dp table (m+1 x n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // Empty string matches empty pattern
    dp[0][0] = true;

    // Fill in patterns like a*, a*b*, etc. that can match empty string
    for (let j = 2; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // DP computation
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // Consider zero occurrence of the char before '*'
                dp[i][j] = dp[i][j - 2];
                // Or one/more if preceding char matches
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};

console.log(isMatch("aa", "a"));      // false
console.log(isMatch("aa", "a*"));     // true
console.log(isMatch("ab", ".*"));     // true
console.log(isMatch("mississippi", "mis*is*p*.")); // false
console.log(isMatch("aab", "c*a*b")); // true
