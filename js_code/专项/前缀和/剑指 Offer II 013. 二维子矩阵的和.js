/**
 * @param {number[][]} matrix
 */
 let sum
 var NumMatrix = function(matrix) {
     let m=matrix.length,n=matrix[0].length
     // 前缀和数组，sum[i][j]表示matrix[i][j]之前的位置之和
     sum=new Array(m).fill(0).map(()=>new Array(n+1).fill(0))
     for(let i=0;i<m;i++){
         for(let j=0;j<n;j++){
             sum[i+1][j+1]=sum[i+1][j]+sum[i][j+1]-sum[i][j]+matrix[i][j]
         }
     }
 
 };
 
 /** 
  * @param {number} row1 
  * @param {number} col1 
  * @param {number} row2 
  * @param {number} col2
  * @return {number}
  */
 NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    //  let ans=0
    //  for(let i=row1;i<=row2;i++)
    //      ans+=sum[i][col2+1]-sum[i][col1]
    //  return ans
    return sum[row2+1][col2+1]-sum[row2+1][col1]-sum[row1][col2+1]+sum[row1][col1]
 
 };
 
 /**
  * Your NumMatrix object will be instantiated and called as such:
  * var obj = new NumMatrix(matrix)
  * var param_1 = obj.sumRegion(row1,col1,row2,col2)
  */