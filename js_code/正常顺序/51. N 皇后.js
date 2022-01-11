/**
 * @param {number} n
 * @return {string[][]}
 */
`
回溯的套路（可硬记）：

遍历枚举出所有可能的选择。
依次尝试这些选择：作出一种选择，并往下递归。
如果这个选择产生不出正确的解，要撤销这个选择（将当前的 "Q" 恢复为 "."），回到之前的状态，并作出下一个可用的选择。
选择、探索、撤销选择。识别出死胡同，就回溯，尝试下一个点，不做无效的搜索。

回溯的三要点
选择，决定了搜索空间，决定了搜索空间有哪些节点。
约束，用来剪枝，避免进入无效的分支。
目标，决定了什么时候捕获有效的解，提前结束递归，开始回溯。

` 

var solveNQueens = function(n) {
  // 棋盘的初始化
  const board=new Array(n).fill().map(()=>new Array(n).fill('.'))
  const res=[]
  //判断当前放置的位置是否有效
  const isValid = (row, col) => {  
     for (let i = 0; i < row; i++) { // 之前的行
         for (let j = 0; j < n; j++) { // 所有的列
             if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
             (j == col || i + j === row + col || i - j === row - col)) {
             return false;             // 不是合法的选择
             }
         }
     }
     return true;
  };

 const dfs=(row)=>{// 放置当前行的皇后
     if(row===n){// 递归的出口，超出了最后一行
         const stringsBoard = board.slice(); // 拷贝一份board
         for (let i = 0; i < n; i++) {
             stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
         }
         res.push(stringsBoard); // 推入res数组
         return;
     }

     for (let col = 0; col < n; col++) { // 枚举出所有选择
         if (isValid(row, col)) {          // 剪掉无效的选择
             board[row][col] = "Q";          // 作出选择，放置皇后
             dfs(row + 1);                // 继续选择，往下递归
             board[row][col] = '.';          // 撤销当前选择
         }
     }
 }

 dfs(0)
 return res

};