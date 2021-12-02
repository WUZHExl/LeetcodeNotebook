// 给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  let l=0,r=0,sum=1,count=0
  while(r<nums.length){
      sum*=nums[r]
      //直接对不符合条件的进行判断
      while(l<=r&&sum>=k){
          sum=Math.floor(sum/nums[l])
          l++
      }
      count+=r>=l?r-l+1:0
      r++
  }
  return count
};