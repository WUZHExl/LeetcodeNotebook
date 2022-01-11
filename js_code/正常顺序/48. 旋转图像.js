/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

`
给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
`


 var rotate = function(matrix) {

  let n=matrix.length
  for(let i=0;i<=n-1;i++){
      let temp=[]
      for(let j=n-1;j>=0;j--){
          temp.push(matrix[j][i])
      }
      matrix.push([...temp])
  }
  matrix.splice(0,n)

};