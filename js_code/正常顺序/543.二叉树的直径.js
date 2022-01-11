/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
//计算它的直径长度。
//一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点
//直径等于节点数-1
var diameterOfBinaryTree = function(root) {
  
  let ans=1
  function depth(root){
    if(!root) return 0;
    let L=depth(root.left) //左子树的深度/节点数
    let R=depth(root.right)  //右子树的深度
    ans=Math.max(L+R+1,ans) //节点数
    return Math.max(L,R)+1 //返回该节点为根的子树深度
  }

  depth(root) 
  return ans-1
};
// @lc code=end

