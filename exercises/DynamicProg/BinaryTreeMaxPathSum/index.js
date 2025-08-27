/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    const helper = (node) => {
        if (!node) return 0;

        // Recursively compute the maximum path sum for left and right subtrees
        const leftMax = Math.max(helper(node.left), 0);
        const rightMax = Math.max(helper(node.right), 0);

        // Update the global maximum path sum
        const currentSum = node.val + leftMax + rightMax;
        maxSum = Math.max(maxSum, currentSum);

        // Return the maximum path sum that can be extended upwards
        return node.val + Math.max(leftMax, rightMax);
    };

    helper(root);
    return maxSum;
};
