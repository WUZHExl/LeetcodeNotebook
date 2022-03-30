/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
`
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。
（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
题目数据保证答案符合 32 位带符号整数范围。
`
`
分析两种情况
s[i - 1] 与 t[j - 1]相等;s[i - 1] 与 t[j - 1] 不相等
当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成。
一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。
一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]。
所以当s[i - 1] 与 t[j - 1]相等时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];

当s[i - 1] 与 t[j - 1]不相等时，dp[i][j]只有一部分组成，不用s[i - 1]来匹配，即：dp[i - 1][j]
所以递推公式为：dp[i][j] = dp[i - 1][j];
`
//动态规划
 var numDistinct = function(s, t) {

  //dp[i][j]：以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]
  let [m,n]=[s.length,t.length]
  let dp=new Array(m+1).fill().map(()=>new Array(n+1).fill(0))

  for(let i=0;i<=m;i++) dp[i][0]=1

  for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
          if(s[i-1]===t[j-1]){
              dp[i][j]=dp[i-1][j-1] + dp[i - 1][j]
          }else{
              dp[i][j]=dp[i-1][j]
          }
      }
  }
  return dp[m][n]

};