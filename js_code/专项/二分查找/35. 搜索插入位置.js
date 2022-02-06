/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
`
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法
`
 var searchInsert = function(nums, target) {


  let l=0,r=nums.length-1
  while(l<=r){
      let mid=Math.floor((r+l)/2)
      if(nums[mid]===target) return mid
      else if(nums[mid]<target){
          l=mid+1
      }
      else{
          r=mid-1
      }
  }
  return l

};