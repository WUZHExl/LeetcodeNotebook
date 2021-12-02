/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let dp=[],ans=nums[0]
  dp[0]=nums[0]
  for(let i=1;i<nums.length;i++){
      dp[i]=Math.max(nums[i],dp[i-1]+nums[i])
      ans=Math.max(dp[i],ans)
  }
  return ans
};


//改进，不用dp[i]
var maxSubArray = function(nums) {
  let temp=ans=nums[0]
  for(let i=1;i<nums.length;i++){
      temp=Math.max(nums[i],temp+nums[i])
      ans=Math.max(temp,ans)
  }
  return ans
};