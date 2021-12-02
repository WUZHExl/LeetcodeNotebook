/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
 //递归
// var preorderTraversal = function(root) {
//     ans=[]
//     const preorder=(root)=>{
//         if(!root) return [];
//         ans.push(root.val)
//         preorder(root.left)
//         preorder(root.right)
//         return ans;
//     }
//     preorder(root)
//     return ans;
// };


//迭代
var preorderTraversal = function(root){
  let ans=[],s=[]
  if(!root) return ans;
  s.push(root)
  while(s.length!==0){
      const node=s.pop()
      ans.push(node.val)
      if(node.right) s.push(node.right)
      if(node.left) s.push(node.left)
  }
  return ans;
}
// @lc code=end

