/**
 * @param {string} s
 * @return {number}
 */
`
给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。
回文字符串 是正着读和倒过来读一样的字符串。
子字符串 是字符串中的由连续字符组成的一个序列。
具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
`
 var countSubstrings = function(s) {
  
  //布尔类型的dp[i][j]：表示区间范围[i,j] （注意是左闭右闭）的子串是否是回文子串，如果是dp[i][j]为true，否则为false。
  let len=s.length
  let dp=new Array(len).fill().map(()=>new Array(len).fill(false))
  let ans=0
  //初始化
  for(let i=0;i<len;i++) dp[i][i]=true
  //遍历顺序：因为dp[i][j]要依赖dp[i+1][j-1],所以需要从下到上，从左到右遍历，这样保证dp[i + 1][j - 1]都是经过计算的。
  for(let i=len-1;i>=0;i--){
      for(let j=i;j<len;j++){
          if(s[i]===s[j]){
            if(j-i<=1) dp[i][j]=true
            else dp[i][j]=dp[i+1][j-1]
          }else{
              dp[i][j]=false
          }
          if(dp[i][j]) ans++
      }
  }
  return ans
};