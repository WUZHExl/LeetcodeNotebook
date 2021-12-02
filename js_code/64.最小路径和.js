/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp=[]
  for(let i=0;i<grid.length;i++){
    dp[i]=[]
    for(let j=0;j<grid[i].length;j++){
      if(i===0&j===0){
        dp[i][j]=grid[i][j]
      }else if(i===0){
        dp[i][j]=grid[i][j]+dp[i][j-1]
      }else if(j===0){
        dp[i][j]=grid[i][j]+dp[i-1][j]
      }else{
        dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]
      }
    }
  }
  return dp[grid.length-1][grid[0].length-1]
};
// @lc code=end

