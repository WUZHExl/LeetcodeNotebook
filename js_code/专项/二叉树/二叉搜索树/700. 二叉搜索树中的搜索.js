`
给定二叉搜索树（BST）的根节点和一个值。 
你需要在BST中找到节点值等于给定值的节点。
 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

`


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
 * @param {number} val
 * @return {TreeNode}
 */

//迭代
 var searchBST = function(root, val) {

  while(root!==null){
      if(root.val===val) return root
      else if(root.val<val) root=root.right
      else root=root.left
  }
  return null

};


//递归
var searchBST = function(root, val) {

  if(!root||root.val===val) return root
  if(root.val<val) return searchBST(root.right,val)
  else return searchBST(root.left,val)
  
};