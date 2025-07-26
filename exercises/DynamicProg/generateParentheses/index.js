/**
 * Generates all combinations of well-formed parentheses given 'n' pairs.
 *
 * @param {number} n - The number of pairs of parentheses.
 * @return {string[]} - An array of strings, where each string is a combination of well-formed parentheses.
 */
var generateParenthesis = function(n) {
    const result = []; // This array will store all valid combinations

    /**
     * Helper function for backtracking.
     * @param {string} currentString - The current string of parentheses being built.
     * @param {number} openCount - The number of open parentheses already added.
     * @param {number} closeCount - The number of close parentheses already added.
     */
    function backtrack(currentString, openCount, closeCount) {
        // Base case: If the current string length is 2 * n, it means we have placed all parentheses.
        // If it's well-formed (openCount === closeCount === n), add it to the result.
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return; // Stop this branch of recursion
        }

        // Recursive step 1: Add an opening parenthesis
        // We can add an opening parenthesis if we haven't used all 'n' open parentheses yet.
        if (openCount < n) {
            backtrack(currentString + "(", openCount + 1, closeCount);
        }

        // Recursive step 2: Add a closing parenthesis
        // We can add a closing parenthesis only if the number of closing parentheses
        // is less than the number of opening parentheses. This ensures that
        // parentheses are well-formed (we don't close before opening).
        if (closeCount < openCount) {
            backtrack(currentString + ")", openCount, closeCount + 1);
        }
    }

    // Start the backtracking process:
    // Initial call with an empty string, zero open parentheses, and zero close parentheses.
    backtrack("", 0, 0);

    return result; // Return the array of all generated combinations
};

// --- Example Usage ---

// Example 1: n = 3
console.log("Example 1 (n = 3):");
const output1 = generateParenthesis(3);
console.log(output1); // Expected: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2: n = 1
console.log("\nExample 2 (n = 1):");
const output2 = generateParenthesis(1);
console.log(output2); // Expected: ["()"]

// Additional Example: n = 2
console.log("\nAdditional Example (n = 2):");
const output3 = generateParenthesis(2);
console.log(output3); // Expected: ["(())", "()()"]

// Additional Example: n = 0 (though constraints say n >= 1, good for testing edge cases)
console.log("\nAdditional Example (n = 0):");
const output4 = generateParenthesis(0);
console.log(output4); // Expected: [""]
