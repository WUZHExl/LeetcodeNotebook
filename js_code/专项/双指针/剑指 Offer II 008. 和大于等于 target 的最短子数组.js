/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//  给定一个含有 n 个正整数的数组和一个正整数 target 。

//  找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
// 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 
 var minSubArrayLen = function(target, nums) {
  let l=0,r=0,sum=nums[l],minLength=nums.length,flag
  while(l<=r&&r<nums.length){
      if(sum>=target) {
          flag=true
          minLength=Math.min(minLength,r-l+1)
          sum=sum-nums[l]
          l++
      }
      else{
          r++
          sum=sum+nums[r]
      }
  }
  if(flag) return minLength
  else return 0
};