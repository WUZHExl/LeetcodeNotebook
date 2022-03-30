/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
`
给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
你可以对一个单词进行如下三种操作：
插入一个字符
删除一个字符
替换一个字符
`
//
 var minDistance = function(word1, word2) {

  let [len1,len2]=[word1.length,word2.length]
  //dp[i][j]表示将以i-1位为结尾的word1转换成以j-1位为结尾的Word2
  let dp=new Array(len1+1).fill().map(()=>new Array(len2+1).fill(0))
  //若word1[i-1]===word2[j-1] =>dp[i][j]=dp[i-1][j-1]
  //若word1[i-1]!==word2[j-1] =>
  //操作一：word1插入一个字符 dp[i][j]=dp[i][j-1]+1
  //word1删除一个字符 dp[i][j]=dp[i-1][j]+1
  //
  for(let i=0;i<=len1;i++) dp[i][0]=i
  for(let j=0;j<=len2;j++) dp[0][j]=j

  for(let i=1;i<=len1;i++){
      for(let j=1;j<=len2;j++){
          if(word1[i-1]===word2[j-1]) dp[i][j]=dp[i-1][j-1]
          else{
              dp[i][j]=Math.min(dp[i][j-1]+1,dp[i-1][j]+1,dp[i-1][j-1]+1)
          }
      }
  }

  return dp[len1][len2]

};