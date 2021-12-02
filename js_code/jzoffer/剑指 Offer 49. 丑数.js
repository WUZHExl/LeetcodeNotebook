/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
  let dp=[],a,b,c
  dp[1]=1,a=b=c=1
  for(let i=2;i<=n;i++){
    dp[i]=Math.min(dp[a]*2,dp[b]*3,dp[c]*5)
    if(dp[i]===dp[a]*2){a++}
    if(dp[i]===dp[b]*3){b++}
    if(dp[i]===dp[c]*5){c++}
    console.log(dp[i])
  }
  return dp[n]
};