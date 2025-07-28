var isMatch = function(s, p) {
    // Create a 2D array to store the results of subproblems
    let dp = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));

    // Base case: empty pattern matches empty string
    dp[0][0] = true;

    // Handle patterns that start with multiple '*' characters
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the dp array
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    // The result is whether the entire string matches the entire pattern
    return dp[s.length][p.length];
};

// Example usage:
console.log(isMatch("aa", "a")); // Output: false
console.log(isMatch("aa", "*")); // Output: true
console.log(isMatch("cb", "?a")); // Output: false
