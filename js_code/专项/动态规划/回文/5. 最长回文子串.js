/**
 * @param {string} s
 * @return {string}
 */
//给你一个字符串 s，找到 s 中最长的回文子串。
 var longestPalindrome = function(s) {

  let len=s.length,maxlen=0,ans=''
  //dp[i][j]表示从字符从位置i到j中包含的最长回文子串长度
  let dp=new Array(len).fill().map(()=>new Array(len).fill(false))
  //for(let i=0;i<len;i++) dp[i][i]=1

  for(let i=len-1;i>=0;i--){
      for(let j=i;j<len;j++){
          if(s[i]!==s[j]) dp[i][j]=false
          else{
              if(j-i<=1) dp[i][j]=true
              else dp[i][j]=dp[i+1][j-1]
          }
          if(dp[i][j]) {
              //maxlen=Math.max(maxlen,j-i+1)
              if(maxlen<j-i+1){
                  maxlen=j-i+1
                  ans=s.slice(i,j+1)
              }
          }
      }
  }
  //return maxlen
  return ans

};