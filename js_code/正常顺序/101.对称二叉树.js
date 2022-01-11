/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  let helper=(left,right)=>{
    if(!left&&!right) return true;
    else if(!left||!right) return false;
    else if(left.val!==right.val) return false;
    else return helper(left.left,right.right)&&helper(left.right,right.left);
  };

  return root?helper(root.left,root.right):true
};
// @lc code=end

