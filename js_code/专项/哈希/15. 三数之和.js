`
1.先将数组从小到大排序，便于微调 sum 的大小。
2.从左到右遍历，先固定一个数，剩下的部分，用头尾双指针扫描
3.如果 sum 大于目标值，就右指针左移，使 sum 变小，否则左指针右移，sum 变大。
4.再看 abs(sum - target) 是否比之前更小了，如果是，将当前 sum 更新给 res
5.遍历结束，就有了最接近目标值的 sum
`

`
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

`
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {

     let ans=[]
     if(nums.length<3) return []
     nums.sort((a,b)=>a-b)
     for(let i=0;i<nums.length;i++){

      let l=i+1,r=nums.length-1
      if(nums[i]>0) break;
      if(i>0&&nums[i]===nums[i-1]) continue //去重

      while(l<r){
        if(nums[i]+nums[l]+nums[r]===0){
          ans.push([nums[i],nums[l],nums[r]])
          while(l<r&&nums[l]===nums[l+1]) l++ //去重
          while(l<r&&nums[r]===nums[r-1]) r-- //去重
          l++
          r--
        }
        else if(nums[i]+nums[l]+nums[r]>0) r--
        else l++
      }
     }
     return ans

};