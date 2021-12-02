/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


//动态规划
var maxSubArray = function(nums) {
  let dp=[],ans=nums[0]
  dp[0]=nums[0]
  
  for(let i=1;i<nums.length;i++){
      dp[i]=Math.max(nums[i],dp[i-1]+nums[i])
      ans=Math.max(dp[i],ans)
  }
  return ans
};
// @lc code=end

