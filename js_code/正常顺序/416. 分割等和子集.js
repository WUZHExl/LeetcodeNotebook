/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 给你一个 只包含正整数 的 非空 数组 nums 。
// 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 var canPartition = function(nums) {

  let sum=nums.reduce((s,current)=>s+current,0)
  if(sum%2!==0) return false
  let n=nums.length
  let target=sum/2
  // 创建二维数组dp，包含 n 行 target+1 列
  let dp=new Array(n).fill(false).map(()=>new Array(target+1).fill(false))
  for (let i = 0; i < n; i++) {
      dp[i][0] = true;
  }

  // dp[i][j]表示从数组的 [0,i] 下标范围内选取若干个正整数（可以是 0 个），
  // 是否存在一种选取方案使得被选取的正整数的和等于 j
  dp[0][nums[0]] = true;
  // 求i>0,j>0的情况
  for(let i=1;i<n;i++){
      for(let j=1;j<=target;j++){
          if (nums[i]>j) {
              // 背包容量不足，不能装入第 i 个物品
              dp[i][j] = dp[i - 1][j];
          } else {
              // 不装入或装入背包
              dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
          }
      }
  }

  return dp[n-1][target]
};