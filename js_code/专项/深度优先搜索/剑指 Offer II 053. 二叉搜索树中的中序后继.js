/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */

`
给定一棵二叉搜索树和其中的一个节点 p ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 null 。
节点 p 的后继是值比 p.val 大的节点中键值最小的节点，即按中序遍历的顺序节点 p 的下一个节点。
`
// isp表示是否是p节点，这个表示的是中序遍历的上一个节点是p节点，
// 那当前节点如果是null也就是还没赋值，那么当前节点是p的下一个节点

 var inorderSuccessor = function(root, p) {
    
  let isp=false;
  let ans=null;
  const dfs=(root,p)=>{
      if(!root) return;
      dfs(root.left,p)
      if(isp && ans === null) {
          ans = root;
          return;
      }
      if(p.val===root.val){
          isp = true;
      }
      dfs(root.right,p)
  }
  dfs(root,p)
  return ans

};


// 
// 下一个节点的值一定不会小于节点p的值，而是大于或等于节点p的值的所有节点中值最小的一个
// 从根节点开始，每到达一个节点就比较根节点的值和节点p的值
// 如果当前节点的值小于或等于节点p的值，那么节点p的下一个节点应该在它的右子树
`如果当前节点的值大于或等于节点p的值，那么当前节点有可能是p的下一个节点，此时当前节点的值比节点p的值大，
但节点p的下一个节点是所有比它大的节点中值最小的一个，因此接下来前往当前节点的左子树，确定是否能找到值更小，但仍然大于节点p的值的节点
`

var inorderSuccessor = function(root, p) {
  let cur = root;
  let result = null;
  while (cur) {
    if (cur.val > p.val) {
      result = cur;
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }
  return result;
};

