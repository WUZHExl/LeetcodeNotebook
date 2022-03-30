/**
 * @param {string} s
 * @return {number}
 */
`
给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
`
 var longestPalindromeSubseq = function(s) {

  //dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]。
  let len=s.length
  let dp=new Array(len).fill().map(()=>new Array(len).fill(0))

  for(let i=0;i<len;i++) dp[i][i]=1

  for(let i=len-1;i>=0;i--){
      for(let j=i+1;j<len;j++){
          if(s[i]===s[j]) dp[i][j]=dp[i+1][j-1]+2
          else dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1])
      }
  }
  return dp[0][len-1]
};