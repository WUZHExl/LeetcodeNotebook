/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const mp=new Map()
  for(i of nums){
      if(mp.has(i)){
          number=mp.get(i)
          mp.set(i,number+1)
      }else{
          mp.set(i,1)
      }
  }
  for(let [k,v] of mp){
      console.log(k,v)
      if(v>nums.length/2) return k
  }
};
// @lc code=end

