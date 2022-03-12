/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
`
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。
`
 var combine = function(n, k) {
      let result =[]
      let path=[]

      const combineHelper=(n,k,startIndex)=>{
        if(path.length===k){ 
          result.push([...path])
          return;
        }

        for(let i=startIndex;i<=n;i++){
          path.push(i)    //进行处理
          combineHelper(n,k,i+1)
          path.pop()      //回溯
        }
      }

      combineHelper(n,k,1)
      return result
};


`
void backtracking(参数) {
  if (终止条件) {
      存放结果;
      return;
  }

  for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
      处理节点;
      backtracking(路径，选择列表); // 递归
      回溯，撤销处理结果
  }
}
`
//优化
var combine = function(n, k) {
  const res = [], path = [];
  backtracking(n, k, 1);
  return res;
  function backtracking (n, k, i){
      const len = path.length;
      if(len === k) {
          res.push(Array.from(path));
          return;
      }
      //剪枝
      for(let a = i; a <= n + len - k + 1; a++) {
          path.push(a);
          backtracking(n, k, a + 1);
          path.pop();
      }
  }
};