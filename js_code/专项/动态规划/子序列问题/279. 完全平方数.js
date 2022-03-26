/**
 * @param {number} n
 * @return {number}
 */

`给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
`
// 动态规划
`
可以依据题目的要求写出状态表达式f[i] 表示最少需要多少个数的平方来表示整数 i。
`
 var numSquares = function(n) {

     let f=new Array(n+1).fill(0)
     for(let i = 1; i <=n; i++) {

        let min=Number.MAX_VALUE
        for(let j = 1; j*j<=i;j++){
          min= Math.min(min, f[i-j*j])
        }
        f[i]=min+1
      }

      return f[n]
};

var numSquares = function(n) {
  const dp =new Array(n+1).fill(0)
  for (let i = 1; i <= n; i++) {
      dp[i] = i; // 最坏的情况就是每次+1
      for (let j = 1; i - j * j >= 0; j++) { 
          dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // 动态转移方程
      }
  }
  return dp[n];
};
