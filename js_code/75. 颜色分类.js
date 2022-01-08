/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
  let l=0,r=nums.length-1,cur=0
  while(cur<=r){
      if(nums[cur]===0) {
          [nums[l],nums[cur]]=[nums[cur],nums[l]]
          l++
      }else if(nums[cur]===2){
          [nums[r],nums[cur]]=[nums[cur],nums[r]]
          r--
          //有可能交换一个 2 回来
          // 这里和 0 不同是因为从左到右
          // 左边不可能还有我们忽略的 0，右边却有 2
          cur--
      }
      cur++
  }
  return nums
};