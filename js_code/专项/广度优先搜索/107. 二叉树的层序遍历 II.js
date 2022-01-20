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

`
给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。
 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
`
 var levelOrderBottom = function(root) {

  if(!root) return [];
  let q=[root];
  let ans=[],level=0;
  while(q.length){
      ans[level]=[];
      let levelNum=q.length
      while(levelNum--){
          let node=q.shift()
          ans[level].push(node.val)
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
      level++
  }
  return ans.reverse()
};