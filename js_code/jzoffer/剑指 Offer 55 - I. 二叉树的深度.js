/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//  输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。


// DFS解决
 var maxDepth = function(root) {
  if(!root) return 0;
  let height=Math.max(maxDepth(root.left),maxDepth(root.right))
  return height+1
};


// BFS解决
var maxDepth = function(root) {
  if(!root) return 0;
  let q=[root],ans=0
  while(q.length){
    temp=[]
    for(let node of q){
      if(node.left) temp.push(node.left)
      if(node.right) temp.push(node.right)
    }
    q=temp
    ans++
  }
  return ans

};
