/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//  输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

 var twoSum = function(nums, target) {
  let l=0,r=nums.length-1
  while(l<=r){
      if(nums[l]+nums[r]===target) return [nums[l],nums[r]]
      else if(nums[l]+nums[r]<target) l++
      else r--
  }
};