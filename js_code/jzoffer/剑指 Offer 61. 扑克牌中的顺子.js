/**
 * @param {number[]} nums
 * @return {boolean}
 */


/*
根据题意，此 5张牌是顺子的 充分条件 如下：

1.除大小王外，所有牌 无重复 ；
2.设此 5张牌中最大的牌为max ，最小的牌为min （大小王除外），则需满足：max - min < 5
*/


 var isStraight = function(nums) {
  let number=0
  nums.sort((a,b)=>a-b)
  for(let i=0;i<nums.length;i++)
  {
      if(nums[i]===0) number++
      else if(nums[i]===nums[i+1]) return false
  }
  // if(nums[4]-nums[number]<5) return true
  // else return false
  return nums[4]-nums[number]<5
};