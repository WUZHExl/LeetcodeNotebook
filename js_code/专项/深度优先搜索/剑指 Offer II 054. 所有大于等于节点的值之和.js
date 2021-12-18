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
 * @return {TreeNode}
 */

`给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。
提醒一下，二叉搜索树满足下列约束条件：
1.节点的左子树仅包含键 小于 节点键的节点。
2.节点的右子树仅包含键 大于 节点键的节点。
3.左右子树也必须是二叉搜索树。
`

 var convertBST = function(root) {

  let sum=0;
  // 反中序遍历，从大到小
  const dfs=root=>{
      if(!root) return;
      dfs(root.right)
      sum+=root.val  // 节点值累加给sum
      root.val=sum   // 累加的结果，赋给root.val
      dfs(root.left)
  }
  dfs(root)
  return root
};