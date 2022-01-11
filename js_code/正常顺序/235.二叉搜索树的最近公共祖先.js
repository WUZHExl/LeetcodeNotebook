/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
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
// 二叉搜索树
/*
我们从根节点开始遍历；
如果当前节点的值大于 p和 q 的值，说明 p 和 q应该在当前节点的左子树，因此将当前节点移动到它的左子节点；
如果当前节点的值小于 p和 q 的值，说明 p 和 q 应该在当前节点的右子树，因此将当前节点移动到它的右子节点；
如果当前节点的值不满足上述两条要求，那么说明当前节点就是「分岔点」。此时，p 和 q 要么在当前节点的不同的子树中，要么其中一个就是当前节点。
*/

var lowestCommonAncestor = function(root, p, q) {
    if(root.val>p.val&&root.val>q.val) return lowestCommonAncestor(root.left,p,q)
    if(root.val<p.val&&root.val<q.val) return lowestCommonAncestor(root.right,p,q)
    return root
};
// @lc code=end

