/**
 * @param {number[]} prices
 * @return {number}
 */

// 动态规划
// dp[i]为以prices[i]为结尾的子数组最小值
// 那么在第i天卖出，得到的利润为prices[i]-dp[i]

 var maxProfit = function(prices) {
  let premin,ans=0
  premin=prices[0]
  for(let i=1;i<prices.length;i++){
      // dp[i]=Math.min(dp[i-1],prices[i])
      premin=Math.min(premin,prices[i])
      ans=Math.max(prices[i]-premin,ans)
  }
  return ans

};