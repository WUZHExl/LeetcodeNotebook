/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  let ans=[],q=[root]
  let level=0 // 代表当前层数
  while(q.length){
      ans[level]=[]
      let levelNum = q.length; // 第level层的节点数量
      while(levelNum--){
        let node=q.shift()
        ans[level].push(node.val)
        node.left&&q.push(node.left)
        node.right&&q.push(node.right)
      }
      level++

  }
  return ans
};
// @lc code=end

