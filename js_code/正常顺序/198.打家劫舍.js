/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp=[],n=nums.length;
    dp[1]=nums[0];
    dp[2]=Math.max(nums[0],nums[1]);
    for(i=3;i<=n;i++)
    {
      dp[i]=Math.max(dp[i-1],nums[i-1]+dp[i-2]);
    }
    return dp[n];
    
};
// @lc code=end

