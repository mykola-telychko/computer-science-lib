/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1 = Infinity;
    let sell1 = 0;
    let buy2 = Infinity;
    let sell2 = 0;

    for (const price of prices) {
        // Minimum cost to buy the first stock
        buy1 = Math.min(buy1, price);
        
        // Maximum profit after selling the first stock
        sell1 = Math.max(sell1, price - buy1);
        
        // Minimum cost to buy the second stock, considering the profit from the first transaction
        buy2 = Math.min(buy2, price - sell1);
        
        // Maximum total profit after selling the second stock
        sell2 = Math.max(sell2, price - buy2);
    }

    return sell2;
};