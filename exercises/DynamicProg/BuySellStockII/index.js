/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    // Sum all positive differences between consecutive days
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
};

// Alternative approach using reduce (more functional style)
var maxProfitAlternative = function(prices) {
    return prices.reduce((profit, price, i) => {
        if (i > 0 && price > prices[i - 1]) {
            return profit + (price - prices[i - 1]);
        }
        return profit;
    }, 0);
};

// Test cases
console.log("Test Case 1:");
console.log("Input: [7,1,5,3,6,4]");
console.log("Output:", maxProfit([7,1,5,3,6,4])); // Expected: 7
console.log("Explanation: Buy at 1, sell at 5 (profit=4), buy at 3, sell at 6 (profit=3), total=7");

console.log("\nTest Case 2:");
console.log("Input: [1,2,3,4,5]");
console.log("Output:", maxProfit([1,2,3,4,5])); // Expected: 4
console.log("Explanation: Buy at 1, sell at 5 (or capture each daily increase)");

console.log("\nTest Case 3:");
console.log("Input: [7,6,4,3,1]");
console.log("Output:", maxProfit([7,6,4,3,1])); // Expected: 0
console.log("Explanation: Prices only decrease, no profit possible");

console.log("\nTest Case 4:");
console.log("Input: [1]");
console.log("Output:", maxProfit([1])); // Expected: 0
console.log("Explanation: Only one day, cannot buy and sell");

console.log("\nTest Case 5:");
console.log("Input: [2,1,2,0,1]");
console.log("Output:", maxProfit([2,1,2,0,1])); // Expected: 2
console.log("Explanation: Buy at 1, sell at 2 (profit=1), buy at 0, sell at 1 (profit=1), total=2");