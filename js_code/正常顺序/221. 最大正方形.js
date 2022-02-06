// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {

  let maxside=0
  if(matrix===null||matrix.length===0||matrix[0].length===0){
    return maxside
  }

  let rows=matrix.length,col=matrix[0].length
  let dp=new Array(rows).fill().map(()=>new Array(col).fill(0))

 //  console.log(dp)

  for(let i=0; i<rows; i++){
    for(let j=0; j<col; j++){
      if(matrix[i][j]==='1'){
        if(i===0||j===0) dp[i][j]=1
        else{
          dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
        }

        maxside=Math.max(maxside,dp[i][j])
      }
    }
  }

  return maxside* maxside
};



