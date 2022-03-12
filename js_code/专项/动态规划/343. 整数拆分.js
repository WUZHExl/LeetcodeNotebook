/**
 * @param {number} n
 * @return {number}
 */
`
给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
返回 你可以获得的最大乘积 。

dp[i] 表示正整数 i 拆分成的整数的最大乘积
对于每个正整数 i，用指针 j 去划分 i，分成了 j 和 i - j。
遍历所有的 j，i-j可以选择拆或者不拆，不拆就是 i-j，拆就是 dp[i - j]，其实就是对 i - j调用的结果（子问题的解）。
`
 var integerBreak = function(n) {
  //dp[i]：分拆数字i，可以得到的最大乘积为dp[i]
  let dp=new Array(n+1).fill(0)
  dp[2]=1
  for(let i=3;i<=n;i++){
      for(let j=1;j<i;j++){
          dp[i]=Math.max(dp[i],j*(i-j),j*dp[i-j])
      }
  }
  return dp[n]


};