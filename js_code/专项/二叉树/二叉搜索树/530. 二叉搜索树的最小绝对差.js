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
 * @return {number}
 */
`
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

差值是一个正数，其数值等于两值之差的绝对值。
`

`
把节点值按顺序保存到数组中，然后解决
`
//递归 先转换为有序数组
 var getMinimumDifference = function(root) {

  let arr=[],ans=Infinity
  let InOrder=root=>{
      root.left&&InOrder(root.left)
      arr.push(root.val)
      root.right&&InOrder(root.right)
  }
  InOrder(root)
  for(let i=1;i<arr.length;i++) ans=Math.min(Math.abs(arr[i]-arr[i-1]),ans)
  return ans

};



//递归 在递归的过程中更新最小值
var getMinimumDifference = function(root) {

  let ans=Infinity,pre=null
  let InOrder=node=>{
      if(!node) return
      node.left&&InOrder(node.left)

      if(pre) ans=Math.min(ans,Math.abs(node.val-pre.val))
      pre=node

      node.right&&InOrder(node.right)
  }
  InOrder(root)
  return ans

};