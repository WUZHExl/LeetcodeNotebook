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

//  给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 递归
 var lowestCommonAncestor = function(root, p, q) {
    if(root.val>p.val&&root.val>q.val) return lowestCommonAncestor(root.left,p,q)
    if(root.val<p.val&&root.val<q.val) return lowestCommonAncestor(root.right,p,q)
    return root 
};

// 非递归
var lowestCommonAncestor = function(root, p, q) {
    while(true){
      if(root.val>p.val&&root.val>q.val) root=root.left
      else if(root.val<p.val&&root.val<q.val) root=root.right
      else break
    }
    return root
};