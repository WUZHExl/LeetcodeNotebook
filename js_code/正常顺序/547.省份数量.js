/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0;
    let visited =new Array(isConnected.length).fill(0);
    for (let i=0; i<isConnected.length; i++) {
      //==0表示未被访问
      if(visited[i]!==1)
      {
        dfs(isConnected,visited,i)
        count++;
      }
      
    }
    return count;
};

function dfs(isConnected,visited,i)
{
   for(let j=0;j<isConnected[i].length; j++)
   {
     if(isConnected[i][j]===1&&visited[j]!==1)
     {
          visited[j]=1//访问标记
          dfs(isConnected,visited,j)
     }
   }
}
// @lc code=end

