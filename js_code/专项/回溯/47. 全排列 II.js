/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {

  let result=[],path=[]

  const dfs=(used)=>{
      if(path.length===nums.length){
          result.push([...path])
          return
      }

      let flag=[]
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