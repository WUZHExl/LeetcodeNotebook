/**
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function(n) {
  //dp[i]表示数字i的最大乘积
  let dp=[]
  dp[0]=dp[1]=0
  for(i=2;i<=n;i++){
      let currmax=0 
      for(j=1;j<i;j++){
          currmax=Math.max(currmax,Math.max(j*(i-j),j*dp[i-j]));
      }
      dp[i]=currmax
  }
  return dp[n]
};