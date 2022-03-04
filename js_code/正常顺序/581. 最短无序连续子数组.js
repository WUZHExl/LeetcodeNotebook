/**
 * @param {number[]} nums
 * @return {number}
 */
`
给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。
`
 var findUnsortedSubarray = function(nums) {


  const isSorted=(nums)=>{
    for(let i=1;i<nums.length;i++){
      if(nums[i]<nums[i-1]) return false
    }
    return true
  }

  if(isSorted(nums)) return 0
  const numsSorted=[...nums].sort((a,b)=>a-b)
  let left=0,right=nums.length-1
  while(nums[left]===numsSorted[left]) left++
  while(nums[right]===numsSorted[right]) right--
  return right-left+1

};