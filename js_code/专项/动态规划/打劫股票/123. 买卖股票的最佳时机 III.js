/**
 * @param {number[]} prices
 * @return {number}
 */
`
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
`

`
一天一共就有五个状态，
没有操作
第一次买入
第一次卖出
第二次买入
第二次卖出

`
 var maxProfit = function(prices) {
  let len=prices.length
  let dp=new Array(len).fill(0).map(()=>new Array(5).fill(0))
  //0-4 五个状态
  //dp[i][0]表示当天没有操作
  //dp[i][1]表示第一次买入dp[i][2]表示第一次卖出
  //dp[i][3]表示第二次买入dp[i][4]表示第二次卖出
  dp[0][1]=-prices[0]
  dp[0][3]=-prices[0]
  for(let i=1;i<len;i++){
      dp[i][0]=dp[i-1][0]
      dp[i][1]=Math.max(dp[i-1][0]-prices[i],dp[i-1][1])
      dp[i][2]=Math.max(dp[i-1][1]+prices[i],dp[i-1][2])
      dp[i][3]=Math.max(dp[i-1][2]-prices[i],dp[i-1][3])
      dp[i][4]=Math.max(dp[i-1][3]+prices[i],dp[i-1][4])
  }
  //console.log(dp)
  return dp[len-1][4]

};