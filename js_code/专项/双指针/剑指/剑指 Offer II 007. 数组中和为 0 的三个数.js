/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

 var threeSum = function(nums) {
  let ans=[]
  if(nums.length<3||nums===null) return []
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i++){
      let l=i+1,r=nums.length-1
      if(nums[i]>0) break;
      if(i>0&&nums[i]===nums[i-1]) continue
      while(l<r){
          if(nums[i]+nums[l]+nums[r]===0) 
          {
              ans.push([nums[i],nums[l],nums[r]])
              while(l<r&&nums[l]===nums[l+1]) l++
              while(l<r&&nums[r]===nums[r-1]) r--
              l++
              r--
          }
          else if(nums[i]+nums[l]+nums[r]>0) r--
          else l++
      }
  }
  return ans
};