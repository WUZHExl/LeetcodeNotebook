/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 题目：从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
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