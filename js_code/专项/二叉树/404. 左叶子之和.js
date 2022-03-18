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


//判断条件：
`
if (node->left != NULL && node->left->left == NULL && node->left->right == NULL) {
  result += node->left->val;
}
`
//给定二叉树的根节点 root ，返回所有左叶子之和。
//迭代
 var sumOfLeftLeaves = function(root) {

  if(!root) return 0
  let q=[root]
  let ans=0
  while(q.length){
      let levelNum=q.length
      while(levelNum--){
          let node=q.shift()
          if(node.left&&node.left.left===null&&node.left.right===null) ans+=node.left.val
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans

};

//递归
var sumOfLeftLeaves = function(root) {

  if(!root) return 0
  let leftValue=sumOfLeftLeaves(root.left)
  let rightValue=sumOfLeftLeaves(root.right)

  let sum=0
  if(root.left&&!root.left.left&&!root.left.right){
      sum=root.left.val
  }
  return sum+leftValue+rightValue

};