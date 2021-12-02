/**
 * @param {number[]} nums
 * @return {number}
 */


//  给你一个整数数组 nums ，请计算数组的 中心下标 。
//  数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
//  本题与主站 724 题相同： https://leetcode-cn.com/problems/find-pivot-index/

 var pivotIndex = function(nums) {
  let left=[],right=[],n=nums.length,ans=-1
  left[0]=0,right[n-1]=0  //
  for(let i=1;i<n;i++) left[i]=left[i-1]+nums[i-1]
  for(let i=n-2;i>=0;i--)right[i]=right[i+1]+nums[i+1]
  for(let i=0;i<n;i++){
      if(left[i]===right[i]) return i
  }
  return ans
};