/**
 * @param {number[]} prices
 * @return {number}
 */


//动态规划
//只有一次买入卖出的机会
//所以第一次卖出的时候，是没有基础利润的
 var maxProfit = function(prices) {

  let dp=new Array(prices.length).fill().map(()=>new Array(2).fill(0))
  //dp[i][0]表示在第i天没有股票 时的利润
  //dp[i][1]表示第i天持有股票  时的利润
  dp[0][0]=0,dp[0][1]=-prices[0]
  for(let i=1;i<prices.length;i++){
      dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
      dp[i][1]=Math.max(dp[i-1][1],-prices[i])
  }
  return dp[prices.length-1][0]
};