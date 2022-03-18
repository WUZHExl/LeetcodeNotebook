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
 * @param {number} targetSum
 * @return {number[][]}
 */
`
给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
叶子节点 是指没有子节点的节点。
`

// 二叉树的回溯！！！！分别对左右子节点进行

 var pathSum = function(root, targetSum) {

  if(!root) return []
  let result=[],path=[root.val]

  const dfs=(node,sum)=>{
      if(!node.left&&!node.right&&sum===targetSum){
          result.push([...path])
      }

      if(node.left){
          path.push(node.left.val)
          sum+=node.left.val
          dfs(node.left,sum)
          sum-=node.left.val
          path.pop()
      }
      
      if(node.right){
          path.push(node.right.val)
          sum+=node.right.val
          dfs(node.right,sum)
          sum-=node.right.val
          path.pop()
      }
  }
  dfs(root,root.val)
  return result

};