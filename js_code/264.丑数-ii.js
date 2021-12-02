/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 
 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
丑数 就是只包含质因数 2、3 和/或 5 的正整数。

质因数（素因数或质因子）在数论里是指能整除给定正整数的质数。
因为1没有质因子，1与任何正整数（包括1本身）都是互质
 */

/*
由于最小的丑数是 1，因此dp[1]=1。
如何得到其余的丑数呢？定义三个指针 p_2,p_3,p_5p 
 表示下一个丑数是当前指针指向的丑数乘以对应的质因数。初始时，三个指针的值都是 1。
*/

var nthUglyNumber = function(n) {

  let dp=[],a,b,c
  dp[1]=1,a=b=c=1
  for(let i=2;i<=n;i++){
    dp[i]=Math.min(dp[a]*2,dp[b]*3,dp[c]*5)
    if(dp[i]===dp[a]*2){a++}
    if(dp[i]===dp[b]*3){b++}
    if(dp[i]===dp[c]*5){c++}
    console.log(dp[i])
  }
  return dp[n]
};
// @lc code=end

