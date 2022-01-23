/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

`
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
返回这三个数的和。
假定每组输入只存在恰好一个解。
`
`
1.先将数组从小到大排序，便于微调 sum 的大小。
2.从左到右遍历，先固定一个数，剩下的部分，用头尾双指针扫描
3.如果 sum 大于目标值，就右指针左移，使 sum 变小，否则左指针右移，sum 变大。
4.再看 abs(sum - target) 是否比之前更小了，如果是，将当前 sum 更新给 res
5.遍历结束，就有了最接近目标值的 sum
`
 var threeSumClosest = function(nums, target) {

  nums.sort((a,b)=>a-b)
  let ans=Infinity
  for(let i=0;i<nums.length;i++){

      let l=i+1,r=nums.length-1

      while(l<r){
          let temp=nums[l]+nums[i]+nums[r]

          if(temp<target) l++
          else r--
          if(Math.abs(temp-target)<Math.abs(ans-target)) ans=temp
      }
  }
  return ans

};