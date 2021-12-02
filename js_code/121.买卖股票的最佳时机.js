/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sell=0,buy=prices[0];
    for(i=0;i<prices.length;i++)
    {
      buy=Math.min(buy,prices[i]);
      sell=Math.max(sell,prices[i]-buy);
    }
    return sell;
};
// @lc code=end

