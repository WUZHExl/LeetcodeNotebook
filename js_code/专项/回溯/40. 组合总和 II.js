/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
`
给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用 一次 。
注意：解集不能包含重复的组合。 
`
 var combinationSum2 = function(candidates, target) {
    let result=[],path=[]
    candidates.sort((a, b) => a - b); //一定要先排序
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