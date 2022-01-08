/**
 * @param {number} n
 * @return {string[]}
 */

//  数字 n 代表生成括号的对数，
// 请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 var generateParenthesis = function(n) {
      const res=[]

      const dfs=(l,r,str)=>{// 左右括号所剩的数量，str是当前构建的字符串
        if(str.length===2*n){
          res.push(str)
          return;
        }

        if(l>0){     // 只要左括号有剩，就可以选它，然后继续做选择（递归）
          dfs(l-1,r,str+"(")
        }
        if(l<r){    // 右括号比左括号剩的多，才能选右括号
          dfs(l,r-1,str+")")
        }
      }

      dfs(n,n,"")
      return res
};