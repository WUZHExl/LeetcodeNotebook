/**
 * @param {number[]} nums
 * @return {number}
 */
`
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组 是数组中的一个连续部分。
`
//贪心
`
累加结果，大于初始值，替代
若结果小于0，重置为0
`

 var maxSubArray = function(nums) {

  let count=0,res=-Infinity
  for(let i=0;i<nums.length;i++){
      count+=nums[i]
      if(count>res) res=count
      if(count<0) count=0
  }
  return res

};