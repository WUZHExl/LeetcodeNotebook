/**
 * @param {number[]} nums
 * @return {number[][]}
 */

`
给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。
你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

示例 1：
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
`

//这里也是要去重的

 var findSubsequences = function(nums) {

  let result=[],path=[]

  const dfs=(index)=>{
      
      if(path.length>=2) result.push([...path])
      if(index>=nums.length){
          return;
      }

      let use=[]
      for(let i=index;i<nums.length;i++)
      {
          //同一父节点下的同层上使用过的元素就不能在使用了
          if(nums[i]<path[path.length-1]&&path.length!==0)  continue;
          if(use[nums[i]+100]) continue

          use[nums[i]+100]=true  //使用标志
          path.push(nums[i])
          dfs(i+1)
          path.pop()
      }
  }

  dfs(0)
  return result

};