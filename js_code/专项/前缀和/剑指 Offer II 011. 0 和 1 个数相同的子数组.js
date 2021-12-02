/**
 * @param {number[]} nums
 * @return {number}
 */

//  给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

// 注意：本题与主站 525 题相同： https://leetcode-cn.com/problems/contiguous-array/

// 把数组中所有的0都替换成-1，就可以使用前缀和思路了

 var findMaxLength = function(nums) {
   let mp=new Map()
   let pre=0,res=0
   mp.set(0,-1)
   for(let i=0;i<nums.length;i++) {
     pre+=nums[i]===0?-1:1 //前缀和
     if(mp.has(pre)){
      //  如果前缀和已存在，则取出，之前的索引j=mp.get(pre)
       res=Math.max(res,i-mp.get(pre))
     }else{
      //哈希表记录的是前缀和及其索引
       mp.set(pre,i)
     }

   }
   return res
};