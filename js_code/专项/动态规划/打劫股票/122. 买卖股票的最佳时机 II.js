/**
 * @param {number[]} prices
 * @return {number}
 */
`
给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
返回 你能获得的 最大 利润 。

股票可以买卖多次！ 所以买入股票的时候，可能会有之前买卖的利润即：dp[i - 1][1]，所以dp[i - 1][1] - prices[i]。
`
 var maxProfit = function(prices) {

  let len=prices.length
  let dp=new Array(len).fill().map(()=>new Array(2).fill(0))
  //dp[i][0]表示第i天持有股票所得利润
  //dp[i][1]表示第i天没有股票所得利润
  dp[0][0]=-prices[0]
  dp[0][1]=0
  for(let i=1;i<len;i++){
      dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]-prices[i])
      dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]+prices[i])
  }

  return Math.max(dp[len-1][0],dp[len-1][1])

};