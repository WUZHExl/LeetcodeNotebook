/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

`
给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，
使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。
如果存在则返回 true，不存在返回 false。
`
// 双指针
 var containsNearbyAlmostDuplicate = function(nums, k, t) {


  let l=0,r=1
  while(l<nums.length){
     while(r<nums.length){
         let sum=Math.abs(nums[l]-nums[r])
         let temp=Math.abs(l-r)
         if(sum<=t&&temp<=k){
             return true
         }else{
         r++
         }
     }
     l++
     r=l+1
  }
  return false

};