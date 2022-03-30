/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
`
给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。
每步 可以删除任意一个字符串中的一个字符。
`
 var minDistance = function(word1, word2) {

  let [len1,len2]=[word1.length,word2.length]
  //dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数。
  let dp=new Array(len1+1).fill().map(()=>new Array(len2+1).fill(0))
  for(let i=0;i<=len1;i++) dp[i][0]=i
  for(let j=0;j<=len2;j++) dp[0][j]=j
  //若word1[i-1]===word2[j-1] =>dp[i][j]=dp[i-1][j-1]
  //若word1[i-1]!==word2[j-1] =>
  // 情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
  // 情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
  // 情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
  for(let i=1;i<=len1;i++){
      for(let j=1;j<=len2;j++){
          if(word1[i-1]===word2[j-1]) dp[i][j]=dp[i-1][j-1]
          else{
              dp[i][j]=Math.min(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+2)
          }
      }
  }
  return dp[len1][len2]

};