/**
 * @param {string} s
 * @return {string[][]}
 */
`
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
回文串 是正着读和反着读都一样的字符串。
`
`
分析一下切割，其实切割问题类似组合问题。
例如对于字符串abcdef：
组合问题：选取一个a之后，在bcdef中再去选取第二个，选取b之后在cdef中在选组第三个.....。
切割问题：切割一个a之后，在bcdef中再去切割第二段，切割b之后在cdef中在切割第三段.....。
`
 var partition = function(s) {
    
  const isHuiwen=(s)=>{
      let n=s.length
      for(let i=0;i<Math.floor(n/2);i++){
          if(s[i]!==s[n-i-1]) return false
      }
      return true
  }

  let result=[],path=[]
  const dfs=(index)=>{

      if(index===s.length){
          result.push([...path])
          return
      }

      for(let i=index;i<s.length;i++){
          let temp=s.slice(index,i+1)
          if(isHuiwen(temp)){
              path.push(temp)
          }else continue
          dfs(i+1)
          path.pop()
      }
  }
  dfs(0)
  return result
};