class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length <= 1) return 0;
        let left = 0;
        let profit = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                left = right;
            }
            profit = Math.max(profit, prices[right] - prices[left]);
        }
        return profit;
    }
}
