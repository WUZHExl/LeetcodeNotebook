/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
`
给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
`

`
使用二维数组 dp[i][j] ：第i天的状态为j，所剩下的最大现金是dp[i][j]

j的状态表示为：

0 表示不操作
1 第一次买入
2 第一次卖出
3 第二次买入
4 第二次卖出
`
 var maxProfit = function(k, prices) {

  let len=prices.length
  if(!len) return 0
  let dp=new Array(len).fill().map(()=>new Array(2*k+1).fill(0))
  //状态0~2*k
  //1,3,5...表示买入；2,4,6...表示卖出
  //
  for(let i=1;i<=2*k-1;i+=2){
      dp[0][i]=-prices[0]
  }
 for(let i=1;i<len;i++){
  dp[i][0]=dp[i-1][0]
  for(let j=1;j<=2*k;j++){
      //%2==0 表示卖出，
      let temp=j%2===0?dp[i-1][j-1]+prices[i]:dp[i-1][j-1]-prices[i]
      dp[i][j]=Math.max(dp[i-1][j],temp)
  }
 }

 return dp[len-1][2*k]

};