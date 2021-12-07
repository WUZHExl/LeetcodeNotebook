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
 * @return {number[]}
 */
//  给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

 var rightSideView = function(root) {
  if(!root) return []
  let q=[root]
  let ans=[]
  while(q.length){
      let levelNum=q.length
      for(let i=0;i<levelNum;i++){
          let node=q.shift()
          if(i===levelNum-1) ans.push(node.val)
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans
};