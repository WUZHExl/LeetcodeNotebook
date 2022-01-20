/**
 * @param {string} s
 * @return {number}
 */

//动态规划，通过
//  var lengthOfLongestSubstring = function(s) {
//       let dp=[],ans,k
//       ans=dp[0]=1
//       for(let i=0;i<s.length; i++){
//         k=i-1
//         while(k>=0 &&s[k]!=s[i]) k--
//         dp[i]=(i-k)<=dp[i-1]?i-k:dp[i-1]+1
//         ans=Math.max(dp[i],ans)
//       }
//       if(!s.length) ans=0
//       return ans

// };


var lengthOfLongestSubstring = function(s) {
  let temp,ans,k
  ans=temp=0
  for(let i=0;i<s.length; i++){
    k=i-1
    while(k>=0 &&s[k]!=s[i]) k--
    temp=(i-k)<=temp?i-k:temp+1
    ans=Math.max(temp,ans)
  }
  return ans

};

lengthOfLongestSubstring(" ")