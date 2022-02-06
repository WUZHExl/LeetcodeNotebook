/**
 * @param {number[]} nums
 * @return {number[]}
 */

`
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。
`


`前缀和，
pre[i]和after[i]分别表示nums[i]之前的数字乘积和之后的数字乘积
`

 var productExceptSelf = function(nums) {


  let n=nums.length
  let pre=new Array(n).fill(1),after=new Array(n).fill(1),
      ans=[]

  for(let i=1;i<n;i++)
  {
      pre[i]=pre[i-1]*nums[i-1]
  }
  for(let i=n-2;i>=0;i--){
      after[i]=after[i+1]*nums[i+1]
  }
  for(let i=0;i<n;i++) ans[i]=pre[i]*after[i]
  return ans

};

`
空间优化
`

var productExceptSelf = function(nums) {


  let n=nums.length
  let ans=new Array(n).fill(1),left=1, right=1

  for(let i=0;i<n;i++)
  {
      i-1>=0?left*=nums[i-1]:1
      ans[i]*=left
  }
  for(let i=n-1;i>=0;i--){
      i+1<=n-1?right*=nums[i+1]:1
      ans[i]*=right
  }
  return ans

};