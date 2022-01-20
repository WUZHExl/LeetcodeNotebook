`
给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。
`

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let l=0,r=nums.length-1
  while(l<=r){
      if(nums[l]!==target) l++;
      if(nums[r]!==target) r--
      if(nums[l]===target&&nums[r]===target) break
  }
  if(l>r) return[-1,-1]
  return [l,r]

};