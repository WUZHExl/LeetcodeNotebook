/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
     let ans=0,dp=[];
     if (nums.length<3) return ans;
     else{
       if(nums[2]-nums[1]===nums[1]-nums[0])
       {
         dp[2]=1;
         ans+=dp[2];
       }
       for(i=3;i<nums.length;i++)
       {
         if(nums[i]-nums[i-1]===nums[i-1]-nums[i-2])
         {
            dp[i]=dp[i-1]+1;
            ans+=dp[i];
         }
         else
         {
           dp[i]=0;
         }
       }
     }
     return ans;
};
// @lc code=end

