/**
 * @param {number[]} nums
 * @return {number}
 */


//  给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，
//  其中 0 <= i < j < n 且 nums[i] < nums[j] 。

//  返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
 
  
 


//动态规划
 var maximumDifference = function(nums) {
  let dp=[],n=nums.length,ans,temp
  dp[1]=nums[1]-nums[0]
  temp=nums[0]
  ans=dp[1]
  for(let i=2;i<=n-1;i++){
      dp[i]=Math.max(nums[i]-temp,nums[i]-nums[i-1])
      ans=Math.max(ans,dp[i])
      temp=dp[i]===nums[i]-temp?temp:nums[i-1]
  }
  if(ans<=0) return -1
  return ans
    
};