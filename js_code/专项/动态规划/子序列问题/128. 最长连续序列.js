`
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

`

/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
 var longestConsecutive = function(nums) {

  if(nums.length===0) return 0;
  nums.sort((a,b)=>a-b)
  //dp[i]表示以i为结尾的连续序列长度
  let dp=[]
  dp[0]=1
  for(let i=1;i<nums.length;i++){
      if(nums[i]===nums[i-1]+1){
          dp[i]=dp[i-1]+1
      }else if(nums[i]===nums[i-1]){
          dp[i]=dp[i-1]
      }else{
          dp[i]=1
      }
  }
  return Math.max(...dp)
};

