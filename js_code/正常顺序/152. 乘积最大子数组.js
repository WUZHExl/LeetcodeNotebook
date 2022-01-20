/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {

  let dpMax=new Array(nums.length).fill(1),
      dpMin=new Array(nums.length).fill(1),
      ans=nums[0]
  dpMax[0]=nums[0]
  dpMin[0]=nums[0]
  // 设置dpMax,dpMin分别保存以当前下标数为结尾的，数组最大乘积和，最小乘积和
  for(let i=1;i<nums.length;i++){
      // nums[i]为正则nums[i]*dpMax[i-1]，否则nums[i]*dpMin[i-1]
      dpMax[i]=Math.max(nums[i],nums[i]*dpMax[i-1],nums[i]*dpMin[i-1])
      dpMin[i]=Math.min(nums[i],nums[i]*dpMin[i-1],nums[i]*dpMax[i-1])
      ans=Math.max(ans,dpMax[i])
  }
  return ans

};


// 空间优化
var maxProduct = (nums) => {
  let res = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    res = Math.max(prevMax, res)
  }
  return res
}

