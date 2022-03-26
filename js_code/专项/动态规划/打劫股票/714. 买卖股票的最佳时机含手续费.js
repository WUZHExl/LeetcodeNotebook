/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
`
给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
返回获得利润的最大值。
注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
`

`
只需要在卖出的时候减去手续费即可
`
 var maxProfit = function(prices, fee) {

  //两个状态dp[i][j]表示第i天第j个状态的最大利润
  //0:表示持有股票，1：表示没有股票

  let len=prices.length
  
  let dp=new Array(len).fill().map(()=>new Array(2).fill(0))
  dp[0][0]=-prices[0]
  dp[0][1]=Math.max(0,-fee)
  for(let i=1;i<len;i++){
      dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]-prices[i])
      dp[i][1]=Math.max(dp[i-1][1],dp[i-1][0]+prices[i]-fee)
  }

  return Math.max(dp[len-1][1],dp[len-1][0])

};