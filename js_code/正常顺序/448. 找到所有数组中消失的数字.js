/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
//  请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。

 var findDisappearedNumbers = function(nums) {

  let ans=[]
  for(let i=1;i<=nums.length;i++){
      if(!nums.includes(i)){
          ans.push(i)
      }
  }
  return ans

};