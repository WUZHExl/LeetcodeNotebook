/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {

//    if(board.length===0) return false;
//    let m=board.length,n=board[0].length;
//    let visited=new Array(m)
//    for(let i=0; i<m; i++){
//      visited[i]=new Array(n).fill(false)
//    }

//    //pos表示搜索单词中的位置
//    //i,j,表示数组位置
//    const backtracking=(i,j,pos)=>{ 
//      if(i<0||i>=m||j<0||j>=n) return false;//越界返回false 

//      if (visited[i][j] || board[i][j] != word[pos]) {
//       return false;
//       }

//      if(pos===word.length-1){//匹配到最后一位
//        return true;
//      }

//      visited[i][j]=true //修改当前节点状态,为已访问
//      let v1=backtracking(i+1,j,pos+1)
//      let v2=backtracking(i-1,j,pos+1)
//      let v3=backtracking(i,j+1,pos+1)
//      let v4=backtracking(i,j-1,pos+1)
//      visited[i][j]=false//修改回去
//      return v1||v2||v3||v4
//    }

//    for(i=0;i<m;i++){
//      for(j=0;j<n;j++){
//       if(backtracking(i,j,0)) return true
//      }
//    }
//    return false

// };


var exist = function(board, word){

  const dfs=(i,j,pos)=>{
    if(i<0||j<0||i>=board.length||j>=board[0].length||board[i][j]!=word[pos])
    {
      return false
    }
    if(pos===word.length-1) return true
    board[i][j]=''
    res=dfs(i+1,j,pos+1)||dfs(i-1,j,pos+1)||dfs(i,j+1,pos+1)||dfs(i,j-1,pos+1)
    board[i][j]=word[pos]
    return res
  }

  for(i=0;i<board.length;i++){
    for(j=0;j<board[0].length;j++){
      if(dfs(i,j,0)) return true
    }
  }
  return false

}

// @lc code=end

