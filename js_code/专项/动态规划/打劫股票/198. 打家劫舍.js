/**
 * @param {number[]} nums
 * @return {number}
 */

`
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，
计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
`
 var rob = function(nums) {

  //dp[i]表示从0~i的房间，最多能偷多少金额
  //第i间房偷：dp[i]=dp[i-2]+nums[i]
  //i不偷：dp[i]=dp[i-1]
  let n=nums.length
  let dp=new Array(n)
  if(n===1) return nums[0]
  dp[0]=nums[0],dp[1]=Math.max(nums[0],nums[1])
  for(let i=2;i<n;i++){
      dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i])
  }
  return dp[n-1]

};