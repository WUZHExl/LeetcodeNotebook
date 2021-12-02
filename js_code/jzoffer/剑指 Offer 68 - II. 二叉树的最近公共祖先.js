/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//  给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

 var lowestCommonAncestor = function(root, p, q) {
    if(!root||root===p||root===q) return root
    let left=lowestCommonAncestor(root.left,p,q)
    let right=lowestCommonAncestor(root.right,p,q)
    if(left===null) return right
    if(right===null) return left
    return root
};