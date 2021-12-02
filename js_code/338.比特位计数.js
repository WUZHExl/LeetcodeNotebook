/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans=[]
  ans[0]=0
  for(let i=1;i<=n;i++)
  {
    // ans[i]=i%2===0?ans[i>>1]:ans[i>>1]+1
    // ans[i]=ans[i>>1]+Math.floor(i%2)
    ans[i]=ans[i>>1]+(i&1)
  }
  return ans
};
// @lc code=end

