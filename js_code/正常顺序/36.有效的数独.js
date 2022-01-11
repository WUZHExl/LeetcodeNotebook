/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
  //判断每一行
  for (row of board)
  {
      let temp=row.filter(x=>(x!=='.'))
      // console.log(temp)
      let s=new Set(temp);
      if(s.size!==temp.length)
      {
          return false;
      }
  }

  //判断每一列
  let col=[]
  let child=[]
  for(i=0;i<9;i++) col[i]=[]
  for(i=0;i<board.length;i++)
  {
    
    for(j=0;j<board[i].length;j++)
    {
      col[j].push(board[i][j]);
    }
  }
  for (row of col)
  {
      let temp=row.filter(x=>(x!=='.'))
      // console.log(temp)
      let s=new Set(temp);
      if(s.size!==temp.length)
      {
          return false;
      }
  }
  // console.log(col)

  //判断3x3


  return true;
};

// board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// isValidSudoku(board)
// @lc code=end

