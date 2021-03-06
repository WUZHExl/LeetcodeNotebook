/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

`
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
`
 var uniquePaths = function(m, n) {

  let dp=new Array(m).fill().map(()=>new Array(n).fill(0))
  //dp[i][j]记录到达第i行第j列位置有几个路径
  //dp[i][j]=dp[i-1][j]+dp[i][j-1]
  //if(i==0) dp[i][j]=dp[i][j-1]
  //if(j==0) dp[i][j]=dp[i-1][j]
  for(let i=0;i<m;i++){
      for(let j=0;j<n;j++){
          if(i===0&&j===0) dp[0][0]=1
          else if(i==0) dp[i][j]=dp[i][j-1]
          else if(j==0) dp[i][j]=dp[i-1][j]
          else dp[i][j]=dp[i-1][j]+dp[i][j-1]
      }
  }
  return dp[m-1][n-1]
};

var uniquePaths = function(m, n) {
    
    let ans=0
    const dfs=(i,j)=>{

      if(i===m&&j===n) return;

      if(i===0) dfs(i,-1)
    }

}