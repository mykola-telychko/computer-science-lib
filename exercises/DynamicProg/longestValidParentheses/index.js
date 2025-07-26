/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if (s.length <= 1) return 0;
    
    // dp[i] represents the length of the longest valid parentheses substring ending at index i
    const dp = new Array(s.length).fill(0);
    let maxLength = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                // Case 1: ...()
                // Current pair forms "()", add 2 plus any valid sequence before it
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (dp[i - 1] > 0) {
                // Case 2: ...))
                // s[i-1] is ')' and dp[i-1] > 0, meaning there's a valid sequence ending at i-1
                // Find the matching '(' for current ')'
                const matchIndex = i - dp[i - 1] - 1;
                
                if (matchIndex >= 0 && s[matchIndex] === '(') {
                    // Found matching '(', extend the sequence
                    dp[i] = dp[i - 1] + 2 + (matchIndex > 0 ? dp[matchIndex - 1] : 0);
                }
            }
            
            maxLength = Math.max(maxLength, dp[i]);
        }
        // If s[i] === '(', dp[i] remains 0 since no valid sequence can end with '('
    }
    
    return maxLength;
};

// Test cases
console.log("Test Case 1:");
console.log('Input: "(()"');
console.log('Output:', longestValidParentheses("(()"));
console.log('Expected: 2\n');

console.log("Test Case 2:");
console.log('Input: ")()())"');
console.log('Output:', longestValidParentheses(")()())"));
console.log('Expected: 4\n');

console.log("Test Case 3:");
console.log('Input: ""');
console.log('Output:', longestValidParentheses(""));
console.log('Expected: 0\n');

console.log("Additional Test Cases:");
console.log('Input: "((("');
console.log('Output:', longestValidParentheses("((("));
console.log('Expected: 0\n');

console.log('Input: ")))"');
console.log('Output:', longestValidParentheses(")))"));
console.log('Expected: 0\n');

console.log('Input: "()(())"');
console.log('Output:', longestValidParentheses("()(())"));
console.log('Expected: 6\n');

console.log('Input: "()(()"');
console.log('Output:', longestValidParentheses("()(()"));
console.log('Expected: 2\n');

console.log('Input: "(()())"');
console.log('Output:', longestValidParentheses("(()())"));
console.log('Expected: 6\n');
