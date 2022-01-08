`

给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
找出 candidates 中可以使数字和为目标数 target 的 所有不同组合 ，
并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。
如果至少一个数字的被选数量不同，则两种组合是不同的。


`

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//回溯
`
回溯：在包含问题所有解的空间树中，用DFS的方式，从根节点出发，搜索整棵解空间树。

搜索至任何一个节点时，总是会先判断当前节点是否可以通往最后的合法解。

如果不可以，则结束对「以当前节点为根节点的子树」的搜索，向父节点回溯，回到之前的状态，搜索下一个分支。

否则，进入该子树，继续以DFS的方式搜索。
`
 var combinationSum = function(candidates, target) {

  let ans=[]

  const dfs=(arr,sum,index)=>{            //
      if (sum >= target) {                  //剪枝
         if(sum===target) ans.push([...arr])
         return;
      }

      for(let i=index;i<candidates.length;i++){
          arr.push(candidates[i])            // 选这个数
          dfs(arr,sum+candidates[i],i)
          arr.pop()                         // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
      }
  }

  dfs([],0,0)

  return ans

};