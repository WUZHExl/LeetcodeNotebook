zzzz/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
 * @return {boolean}
 */

// 需要一个判断高度的函数
var isBalanced = function(root) {
  
  function dfs(root){
    if (!root) return 0;
    let left=dfs(root.left)
    let right=dfs(root.right)
    let index=Math.abs(left-right)
    if(left===-1||right===-1||index>1) return -1
    return Math.max(left,right)+1
  }
  
  return dfs(root)!==-1
};

//自底向上的递归
// function dfs(root) {
  // if (!root) return 0;
  // let left=dfs(root.left)
  // let right=dfs(root.right)
  // let index=Math.abs(left-right)
  // if(left===-1||right===-1||index>1) return -1
  // return Math.max(left,right)+1
// }


//自上而下的递归
// var isBalanced = function(root) {
//   if(!root) return true
//   return Math.abs(height(root.left)-height(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right)

// }

// function height(root) {
//   if(!root) return 0;
//   return 1+Math.max(height(root.left),height(root.right))
// }


// @lc code=end

