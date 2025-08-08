/**
 * Scramble String - Dynamic Programming with Memoization
 * Time Complexity: O(n^4) where n is the length of the strings
 * Space Complexity: O(n^3) for memoization
 * 
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    // Early exit conditions
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    
    // Check if both strings have the same characters
    // If character frequencies don't match, they can't be scrambles
    const freq1 = new Array(26).fill(0);
    const freq2 = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        freq1[s1.charCodeAt(i) - 97]++;
        freq2[s2.charCodeAt(i) - 97]++;
    }
    
    for (let i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }
    
    // Memoization cache
    const memo = new Map();
    
    function helper(s1, s2) {
        // Base cases
        if (s1.length !== s2.length) return false;
        if (s1 === s2) return true;
        if (s1.length <= 1) return s1 === s2;
        
        // Check memoization
        const key = `${s1}#${s2}`;
        if (memo.has(key)) return memo.get(key);
        
        const n = s1.length;
        
        // Try all possible split points
        for (let i = 1; i < n; i++) {
            // Case 1: No swap - s1[0:i] matches s2[0:i] AND s1[i:n] matches s2[i:n]
            const noSwap = helper(s1.substring(0, i), s2.substring(0, i)) && 
                          helper(s1.substring(i), s2.substring(i));
            
            if (noSwap) {
                memo.set(key, true);
                return true;
            }
            
            // Case 2: Swap - s1[0:i] matches s2[n-i:n] AND s1[i:n] matches s2[0:n-i]
            const withSwap = helper(s1.substring(0, i), s2.substring(n - i)) && 
                            helper(s1.substring(i), s2.substring(0, n - i));
            
            if (withSwap) {
                memo.set(key, true);
                return true;
            }
        }
        
        memo.set(key, false);
        return false;
    }
    
    return helper(s1, s2);
};

/**
 * Alternative solution using 3D Dynamic Programming
 * More memory efficient for repeated subproblems
 */
var isScrambleDP = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    
    const n = s1.length;
    
    // dp[len][i][j] = true if s1[i:i+len] can scramble to s2[j:j+len]
    const dp = Array(n + 1).fill(null).map(() => 
        Array(n).fill(null).map(() => Array(n).fill(false))
    );
    
    // Base case: length 1 substrings
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[1][i][j] = (s1[i] === s2[j]);
        }
    }
    
    // Fill DP table for lengths 2 to n
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            for (let j = 0; j <= n - len; j++) {
                // Try all possible split points
                for (let k = 1; k < len; k++) {
                    // No swap case
                    if (dp[k][i][j] && dp[len - k][i + k][j + k]) {
                        dp[len][i][j] = true;
                        break;
                    }
                    
                    // Swap case
                    if (dp[k][i][j + len - k] && dp[len - k][i + k][j]) {
                        dp[len][i][j] = true;
                        break;
                    }
                }
            }
        }
    }
    
    return dp[n][0][0];
};

// Test cases
console.log("=== Memoization Solution ===");
console.log(isScramble("great", "rgeat")); // true
console.log(isScramble("abcde", "caebd")); // false
console.log(isScramble("a", "a")); // true
console.log(isScramble("abc", "acb")); // true
console.log(isScramble("hwareg", "grhwae")); // true

console.log("\n=== 3D DP Solution ===");
console.log(isScrambleDP("great", "rgeat")); // true
console.log(isScrambleDP("abcde", "caebd")); // false
console.log(isScrambleDP("a", "a")); // true
console.log(isScrambleDP("abc", "acb")); // true
console.log(isScrambleDP("hwareg", "grhwae")); // true

/**
 * Explanation of the algorithm:
 * 
 * The key insight is that for s1 to be scrambled into s2, we can:
 * 1. Split s1 at some position i into left and right parts
 * 2. Either keep the order (no swap) or swap the parts
 * 
 * No swap: s1 = left + right → s2 = left' + right'
 * - left must scramble to left' of s2
 * - right must scramble to right' of s2
 * 
 * With swap: s1 = left + right → s2 = right' + left'  
 * - left must scramble to right' of s2
 * - right must scramble to left' of s2
 * 
 * We try all possible split points and both cases recursively.
 */