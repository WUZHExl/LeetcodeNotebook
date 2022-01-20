/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

`
给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。
`

`
得到dp[j]（考虑coins[i]），只有一个来源，dp[j - coins[i]]（没有考虑coins[i]）。

凑足总额为j - coins[i]的最少个数为dp[j - coins[i]]，那么只需要加上一个钱币coins[i]即dp[j - coins[i]] + 1就是dp[j]（考虑coins[i]）

所以dp[j] 要取所有 dp[j - coins[i]] + 1 中最小的。

递推公式：dp[j] = min(dp[j - coins[i]] + 1, dp[j]);
`

 var coinChange = function(coins, amount) {

  //dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
  if(!amount) return 0;
  let dp=new Array(amount+1).fill(Infinity)
  dp[0]=0

  for(let i=0;i<coins.length;i++){
    for(let j=coins[i];j<=amount;j++){
      dp[j]=Math.min(dp[j-coins[i]]+1,dp[j])
    }
  }

  return dp[amount]===Infinity?-1:dp[amount]
};