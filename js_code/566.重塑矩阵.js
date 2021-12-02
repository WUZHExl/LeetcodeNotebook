/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let sum=0,num=0;
    let ans=[],temp=[];
   for(i of mat)
    {
      sum+=i.length;
      for(j of i)
      {
        temp.push(j);
      }
    }
    if(sum!==r*c){
       return mat;
    }
    else{
      for(i=0;i<r;i++)
      {
        ans[i]=[]
        for(j=0;j<c;j++)
        {
            ans[i].push(temp[num++]);
        }
      }
    return ans;
    }
};
const nums=[[1,2],
[3,4]];
r=1,c=4
matrixReshape(nums,r,c)
// @lc code=end

