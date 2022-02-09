`
给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
`

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

  let n=prices.length
  if(n===0) return 0

  // dp[i][0]: 手上持有股票的最大收益
  // dp[i][1]: 手上不持有股票，并且处于冷冻期中的累计最大收益
  // dp[i][2]: 手上不持有股票，并且不在冷冻期中的累计最大收益
  let dp=new Array(n).fill().map(()=>new Array(3).fill(0))
  dp[0][0]=-prices[0]
  for(let i=1;i<n;i++){
    `对于 f[i][0]，我们目前持有的这一支股票可以是在第 i-1天就已经持有的，对应的状态为 f[i-1][0]f[i−1][0]；
    或者是第 i 天买入的，那么第 i-1天就不能持有股票并且不处于冷冻期中，对应的状态为 f[i-1][2]
    加上买入股票的负收益 prices[i]`
    dp[i][0]=Math.max(dp[i-1][0],dp[i-1][2]-prices[i])

    `处于冷冻期，说明前一天持有股票并在这天卖出了`
    dp[i][1]=dp[i-1][0]+prices[i]
    `持有股票且不出于冷冻期，说明当天没有进行任何操作`
    dp[i][2]=Math.max(dp[i-1][1],dp[i-1][2])
  }

  return Math.max(dp[n-1][1],dp[n-1][2])

};