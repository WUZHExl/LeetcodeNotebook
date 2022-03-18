/**
 * @param {number[]} nums
 * @return {number[][]}
 */

`
给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
`
`
与78.子集比较就是多了要去重的步骤，因为数组里有重复元素

`

 var subsetsWithDup = function(nums) {


  let result=[],path=[]
  nums.sort((a,b)=>a-b)
  const dfs=(index)=>{
      result.push([...path])
      if(index>=nums.length){
          return;
      }

      for(let i=index;i<nums.length;i++){
          if(i>index&&nums[i]===nums[i-1]) continue;//去重
          path.push(nums[i])
          dfs(i+1)
          path.pop()
      }
  }
  dfs(0)
  return result

};