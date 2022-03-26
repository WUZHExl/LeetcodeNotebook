`
给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
`
`
//dp[i][j]表示第i天第j个状态下，利润
//0~2三个状态
//0：持有股票；1：没有股票，在冷静期内(卖股票后的一天)；2：没有股票，在冷静期外
`
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

    
  let len=prices.length

  //dp[i][j]表示第i天第j个状态下，利润
  //0~2三个状态
  //0：持有股票；1：没有股票，在冷静期内(卖股票后的一天)；2：没有股票，在冷静期外
  let dp=new Array(len).fill().map(()=>new Array(3).fill(0))
  dp[0][0]=-prices[0]
  for(let i=1;i<len;i++){
      //没有股票：前一天也没有；或者前一天卖出了
      dp[i][0]=Math.max(dp[i-1][0],dp[i-1][2]-prices[i])
      //有股票，冷静期：前一天卖出了
      dp[i][1]=dp[i-1][0]+prices[i]
      //有股票，不在冷静期：前一天是冷静期；或者前一天不在延续状态
      dp[i][2]=Math.max(dp[i-1][1],dp[i-1][2])
  }
  //console.log(dp)
  return Math.max(dp[len-1][1],dp[len-1][2])
};