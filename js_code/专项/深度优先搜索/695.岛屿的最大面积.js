/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea=0
  for (let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
      if(grid[i][j]===1)
      {
        //更新
        maxArea=Math.max(maxArea,dfs(grid,i,j))
      }
    }
  }
  return maxArea
};

function dfs(grid,i,j) {
  //递归出口
  if(i<0||j<0||i>=grid.length||j>=grid[i].length||grid[i][j]===0)
  {
    return 0;
  }
  let area=1; //设置面积
  grid[i][j]=0 //翻转
  //在每个位置，对上下左右的邻居进行dfs
  area+=dfs(grid,i+1,j)
  area+=dfs(grid,i-1,j)
  area+=dfs(grid,i,j+1)
  area+=dfs(grid,i,j-1)
  
  return area//局部岛屿的面积
}
// @lc code=end

