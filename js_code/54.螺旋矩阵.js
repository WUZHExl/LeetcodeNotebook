/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    if(!matrix.length||!matrix[0].length) return [];
    const row=matrix.length,col=matrix[0].length;
    let ans=[],left=0,right=col-1,top=0,bottom=row-1;

    while(left<=right&&top<=bottom){

      //从左到右
      for(let i=left; i<=right; i++){
        ans.push(matrix[top][i])
      }

      //从上到下
      for(let j=top+1;j<=bottom;j++){
        ans.push(matrix[j][right])
      }

      if(left<right&&top<bottom){
          //从右到左
          for(let i=right-1;i>=left;i--){
            ans.push(matrix[bottom][i])
          }

          //从下到上
          for(let i=bottom-1;i>top;i--){
            ans.push(matrix[i][left])
          }
      }

      [left,right,top,bottom]=[left+1,right-1,top+1,bottom-1]

    }
    return ans

};
// @lc code=end

