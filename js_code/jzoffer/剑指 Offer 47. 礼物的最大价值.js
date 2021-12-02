/**
 * @param {number[][]} grid
 * @return {number}
 */


//二维动态规划
// // 创建行m列n的二维数组
// const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
 var maxValue = function(grid) {
  let n=grid.length,m=grid[0].length
  let dp=new Array(n)
  for(let i=0;i<n;i++){
      dp[i]=[]
      for(let j=0;j<m;j++){
          if(i===0&&j===0){
              dp[i][j]=grid[i][j]
          }else if(i===0&&j!==0){
              dp[i][j]=dp[i][j-1]+grid[i][j]
          }else if(i!==0&&j===0){
              dp[i][j]=dp[i-1][j]+grid[i][j]
          }else{
              dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])+grid[i][j]
          }
      }
  }
  return dp[n-1][m-1]


};