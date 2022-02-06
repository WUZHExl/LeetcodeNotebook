/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

`
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
`


 var searchMatrix = function(matrix, target) {

  for(let i=0;i<matrix.length;i++){

      let n=matrix[i].length
      if(matrix[i][0]>target||matrix[i][n-1]<target) continue
      let l=0,r=n-1
      while(l<=r){
          let mid=Math.floor((r-l)/2)+l

          if(matrix[i][mid]===target) return true
          else if(matrix[i][mid]<target){
              l=mid+1
          }
          else r=mid-1
      }
  }
  return false
  
};