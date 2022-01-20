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

 //给你二叉树的根节点 root ，返回其节点值的 锯齿形层序遍历 。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

 var zigzagLevelOrder = function(root) {

  if(!root) return []
  let q=[root]
  let ans=[],level=0
  while(q.length){
      ans[level]=[]
      let length=q.length
      while(length--){
          let node=q.shift() //出队
          if(level%2==0) ans[level].push(node.val)
          else ans[level].unshift(node.val)
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
      
      level++
  }

  return ans

};