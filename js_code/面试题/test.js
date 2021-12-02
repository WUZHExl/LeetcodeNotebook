/**
 * @param {number[][]} grid
 * @return {number}
 */
 var gridGame = function(grid) {
  let m=grid.length,n=grid[0].length
  let dp=new Array(m)
  for(let i=0;i<m;i++) dp[i]=new Array(n).fill(0)
  
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(i===0&&j===0) {
        dp[i][j]=grid[i][j]
      }
      else if(i<=0) {
        dp[i][j]=dp[i][j-1]+grid[i][j]
      }
      else if(j<=0) {
        dp[i][j]=dp[i-1][j]+grid[i][j]
      }
      else {
        dp[i][j]=Math.max(dp[i][j-1]+grid[i][j],dp[i-1][j]+grid[i][j])
      }


    }
  }
  grid[m-1][n-1]=0
  console.log(grid)
  // for(let i=0;i<m;i++){
  //   for(let j=0;j<n;j++){
  //     if(i===0&&j===0) {
  //       dp[i][j]=grid[i][j]
  //     }
  //     else if(i<=0) {
  //       dp[i][j]=dp[i][j-1]+grid[i][j]
  //     }
  //     else if(j<=0) {
  //       dp[i][j]=dp[i-1][j]+grid[i][j]
  //     }
  //     else dp[i][j]=Math.max(dp[i][j-1]+grid[i][j],dp[i-1][j]+grid[i][j])
  //   }
  // }
  console.log(dp)
  return dp[m-1][n-1]
};

gridGame([[1,3,1,15],[1,3,3,1]])