/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

`给你一个整数数组 nums 和一个整数 target 。
向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。`


// 动态规划
 var findTargetSumWays = function(nums, target) {

  let sum=nums.reduce((pre,curr)=>pre+curr,0)
  let diff=sum-target
  if(diff<0||diff%2!==0) return 0

  let n=nums.length,
      neg=diff/2
  
  let dp=new Array(n+1).fill().map(()=>new Array(neg+1).fill(0))
  dp[0][0]=1
  for(let i=1;i<n+1;i++){

      for(let j=0;j<neg+1;j++)
      if(nums[i-1]>j){  //不选择第i个元素  //nums[0]是第一个元素
          dp[i][j]=dp[i-1][j]
      }else{           //选择
          dp[i][j]=dp[i-1][j]+dp[i-1][j-nums[i-1]]
      }

  }

  return dp[n][neg]

};


//
var findTargetSumWays = function(nums, target) {
  let count = 0;
  const backtrack = (nums, target, index, sum) => {
      if (index === nums.length) {
          if (sum === target) {
              count++;
          }
      } else {
          backtrack(nums, target, index + 1, sum + nums[index]);
          backtrack(nums, target, index + 1, sum - nums[index]);
      }
  }
  
  backtrack(nums, target, 0, 0);
  return count;
};

