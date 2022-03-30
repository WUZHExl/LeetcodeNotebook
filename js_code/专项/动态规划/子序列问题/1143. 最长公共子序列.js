/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//
`
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
`
`
主要就是两大情况： text1[i - 1] 与 text2[j - 1]相同，text1[i - 1] 与 text2[j - 1]不相同
如果text1[i - 1] 与 text2[j - 1]相同，那么找到了一个公共元素，所以dp[i][j] = dp[i - 1][j - 1] + 1;
如果text1[i - 1] 与 text2[j - 1]不相同，那就看看text1[0, i - 2]与text2[0, j - 1]的最长公共子序列 和 text1[0, i - 1]与text2[0, j - 2]的最长公共子序列，取最大的。
即：dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
`
 var longestCommonSubsequence = function(text1, text2) {

  let m=text1.length
  let n=text2.length
  //dp[i][j]：长度为[0, i - 1]的字符串text1与长度为[0, j - 1]的字符串text2的最长公共子序列为dp[i][j]
  let dp=new Array(m+1).fill().map(()=>new Array(n+1).fill(0))
  for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
          if(text1[i-1]===text2[j-1]){
              dp[i][j]=dp[i-1][j-1]+1
          }else{
              dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
          }
      }
  }
  return dp[m][n]
};