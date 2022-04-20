/**
 * @param {number[]} nums
 * @return {number}
 */
`
给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。
`
 var jump = function(nums) {

  let curr=0  //从当前位置开始计算，能够到达的最远位置
  let count=0
  let index=0 //指的是当前所在位置，它是根据上一个位置所能到达的最远距离开始计算的
  for(let i=0;i<nums.length;i++){
      curr=Math.max(curr,i+nums[i])
      if(i===index){
          if(i===nums.length-1) break; //已经找到到达最后一个位置，不用再加
          index=curr
          count++
      }
  }
  return count

};