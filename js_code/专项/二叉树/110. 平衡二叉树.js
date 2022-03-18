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

`
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
`
 var isBalanced = function(root) {


    const getHeight=root=>{
      if(!root) return 0;
      let leftHeight=getHeight(root.left);
      let rightHeight=getHeight(root.right);
      let index=Math.abs(leftHeight-rightHeight)
      if(leftHeight!==-1&&rightHeight!==-1&&index<=1) return Math.max(rightHeight, leftHeight)+1
      return -1
    }

    return getHeight(root)!==-1
};