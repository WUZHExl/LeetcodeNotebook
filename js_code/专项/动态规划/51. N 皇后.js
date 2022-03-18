/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {

  let result=[]
   let path = new Array(n).fill([]).map(() => new Array(n).fill('.'))
  const dfs=(row,path)=>{
      if(row===n){

          let temp=path.slice()
          temp=temp.map(item=>{
              return item.join('')
          })
          result.push([...temp])
          return;
      }

      for(let col=0;col<n;col++){
          if(isVaild(row,col,path,n)){
              path[row][col]='Q'
              dfs(row+1,path)
              path[row][col]='.'
          }

      }
  }
  dfs(0,path)
  return result
};

const isVaild=(row,col,chessBoard,n)=>{ //判断当前位置是否合理
      for(let i = 0; i < row; i++) {  //检查列
          if(chessBoard[i][col] === 'Q') {
              return false
          }
      }

      for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {//检查45度角
          if(chessBoard[i][j] === 'Q') {
              return false
          }
      }

      for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {//检查135度角
          if(chessBoard[i][j] === 'Q') {
              return false
          }
      }
      return true
}