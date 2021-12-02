/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let ans=[];
  for(i=0;i<numRows;i++)
  {
      ans[i]=new Array(i+1);
      //两边数字填充为1
      ans[i][0]=ans[i][i]=1;
      for(j=1;j<i;j++)
      {
          //从第三行开始需要填充，所以j=1;j<i
          ans[i][j]=ans[i-1][j]+ans[i-1][j-1];
      }
  }
  return ans;
};
// @lc code=end

