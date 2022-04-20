/**
 * @param {number[]} nums
 * @return {number[]}
 */
`
给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。
数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。
`
`
这里需要处理循环数组
把原数组复制两份就行了
如果不想浪费空间，可以在下标上做手脚
`
 var nextGreaterElements = function(nums) {

  let stack=[]
  let ans=new Array(nums.length).fill(-1)
  for(let i=0;i<nums.length*2;i++){

      while(stack&&nums[i%nums.length]>nums[stack[stack.length-1]]){
          let index=stack.pop()
          ans[index]=nums[i%nums.length]
      }
      stack.push(i%nums.length)
  }
  return ans

};