`
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
`

// DFS
`
为了求出岛屿的数量，我们可以扫描整个二维网格。如果一个位置为 1，则以其为起始节点开始进行深度优先搜索。
在深度优先搜索的过程中，每个搜索到的 1 都会被重新标记为 0。
最终岛屿的数量就是我们进行深度优先搜索的次数。
`
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {

    let nr=grid.length  //行
    let nc=grid[0].length //列

    const dfs=(grid,r,c)=>{
      if(r<0||c<0||r>=nr||c>=nc||grid[r][c]==='0'){
        return;
      }

      grid[r][c]='0'
      dfs(grid,r-1,c)
      dfs(grid,r+1,c)
      dfs(grid,r,c-1)
      dfs(grid,r,c+1)
    }
    let ans=0
    for(let i=0;i<nr;i++){
      for(let j=0;j<nc;j++){  //扫描整个二维网格。如果一个位置为 1，则以其为起始节点开始进行深度优先搜索
        if(grid[i][j]==='1'){
          ans++;
          dfs(grid,i,j)
        }
      }
    }

    return ans

};