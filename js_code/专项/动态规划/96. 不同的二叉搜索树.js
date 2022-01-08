/**
 * @param {number} n
 * @return {number}
 */

//  给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？
// 返回满足题意的二叉搜索树的种数。


`
思路：
给定一个有序序列 1⋯n，为了构建出一棵二叉搜索树，我们可以遍历每个数字 i，
将该数字作为树根，将 1⋯(i−1) 序列作为左子树，将 (i+1)⋯n 序列作为右子树。
接着我们可以按照同样的方式递归构建左子树和右子树。
`
`
定义dp表示长度为 n 的序列能构成的不同二叉搜索树的个数

dp[n] 的值应该为 从1~n分别取这些数为根节点，得到的二叉树之和

F(i,n): 以 i 为根、序列长度为 n 的不同二叉搜索树个数(1≤i≤n)

F(i,n)=G(i−1)⋅G(n−i)
`
 var numTrees = function(n) {

  let dp=new Array(n+1).fill(0)
  dp[0]=1
  dp[1]=1

  for(let i=2;i<=n;i++){
      for(let j=1;j<=i;j++){
          dp[i]+=dp[j-1]*dp[i-j]
      }
  }
  return dp[n]

};