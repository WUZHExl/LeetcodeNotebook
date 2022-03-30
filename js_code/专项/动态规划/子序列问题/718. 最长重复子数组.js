/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
`
给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

设dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度
dp[i][j]的值只能由dp[i-1][j-1]推出

这里的子数组是连续的
`


 var findLength = function(nums1, nums2) {

  let m=nums1.length
  let n=nums2.length
  let dp=new Array(m+1).fill().map(()=>new Array(n+1).fill(0))
  //dp[i][j] ：以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]
  let ans=0
  for(let i=1;i<=m;i++){
      for(let j=1;j<=n;j++){
          if(nums1[i-1]===nums2[j-1]){
              dp[i][j]=dp[i-1][j-1]+1
          }
          ans=Math.max(ans,dp[i][j])
      }
  }
  return ans

};