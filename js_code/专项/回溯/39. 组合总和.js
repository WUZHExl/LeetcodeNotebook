/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
`
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
对于给定的输入，保证和为 target 的不同组合数少于 150 个。

输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
`

// 本题元素为可重复选取的。
 var combinationSum = function(candidates, target) {  

  let result=[],path=[]
  candidates.sort((a, b) => a - b);//需要先排序
  const dfs=(sum,index)=>{
      if(sum>target) return;
      if(sum===target){
          result.push([...path])
          return;
      }
      for(let i=index;i<candidates.length;i++){
         // 当前元素跟上一个元素相同且上一个元素在索引选择范围内则当前元素就不需要加入//去重
         if (i - 1 >= index && candidates[i - 1] == candidates[i]) continue;
          path.push(candidates[i])
          dfs(sum+candidates[i],i+1)
          path.pop()
      }
  }
  dfs(0,0)
  return result
};