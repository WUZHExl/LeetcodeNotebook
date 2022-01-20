/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
`
先给出递归函数的定义：给该函数输入三个参数 root，p，q，它会返回一个节点

情况 1，如果 p 和 q 都在以 root 为根的树中，函数返回的就是 p 和 q 的最近公共祖先节点。

情况 2，那如果 p 和 q 都不在以 root 为根的树中怎么办呢？函数理所当然地返回 null 呗。

情况 3，那如果 p 和 q 只有一个存在于 root 为根的树中呢？函数就会返回那个节点。

根据这个定义，分情况讨论：

情况 1，如果 p 和 q 都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）。

情况 2，如果 p 和 q 都不在以 root 为根的树中，直接返回 null。

情况 3，如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。
`


var lowestCommonAncestor = function(root, p, q) {
  // 遇到null，返回null 没有LCA
  // 遇到p或q，直接返回当前节点
  if(!root||root===p||root===q) return root
  // 非null 非q 非p，则递归左右子树
  let left=lowestCommonAncestor(root.left,p,q)
  let right=lowestCommonAncestor(root.right,p,q)

  // 根据递归的结果，决定谁是LCA
  if(left===null) return right
  if(right===null) return left
  return root
};
// @lc code=end

