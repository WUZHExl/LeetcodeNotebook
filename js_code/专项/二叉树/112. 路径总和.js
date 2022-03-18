/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
`
给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。
`



 var hasPathSum = function(root, targetSum) {

  //递归
  const dfs=(root,count)=>{

      if(!root.left&&!root.right&&count===0) return true  // 遇到叶子节点，并且计数为0
      if(!root.left&&!root.right) return false

      if(root.left){
          if(dfs(root.left,count-root.left.val)) return true
      }
      if(root.right){
          if(dfs(root.right,count-root.right.val)) return true
      }
      return false
  }
  if(!root) return false
  return dfs(root,targetSum-root.val)

};


// 优化
var hasPathSum = function(root, targetSum) {

  if(!root) return false
  if(!root.left&&!root.right&&targetSum===root.val) return true

  let left=hasPathSum(root.left,targetSum-root.val)
  let right=hasPathSum(root.right,targetSum-root.val)

  return left||right
};