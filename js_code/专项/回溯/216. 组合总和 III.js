/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
`
找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：
只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。
`
 var combinationSum3 = function(k, n) {
      let result =[]                  //结果集合
      let path =[]                    //当前选择的路径

      const dfs=(n,k,sum,startindex) =>{
        if(sum===n&&path.length===k){
          result.push([...path])
          return
        }
        for(let i=startindex;i<=9;i++){//for循环的长度是能取到的最大项，for循环遍历的是同一层节点
          path.push(i)
          dfs(n,k,sum+i,i+1)           //向下一层递归
          path.pop()
        }
      }
      dfs(n,k,0,1)                    
      return result
};