/**
 * @param {number[]} nums
 * @return {number[][]}
 */

`
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

`
 var permuteUnique = function(nums) {

  let result=[],path=[]

  const dfs=(used)=>{
      if(path.length===nums.length){
          result.push([...path])
          return
      }

      let flag=[]  //要求有重复数字的序列，求不重复排列
      for(let i=0;i<nums.length;i++){

          if(used[i]) continue;
          if(flag[nums[i]+10]) continue;
          used[i]=true
          flag[nums[i]+10]=true
          path.push(nums[i])
          dfs(used)
          used[i]=false
          path.pop()
      }
  }
  dfs([])
  return result

};