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
 * @return {string[]}
 */
`
给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
叶子节点 是指没有子节点的节点。
`
// 回溯
 var binaryTreePaths = function(root) {

  let result=[],path=[]
  const dfs=(node)=>{
      if(node.left===null&&node.right===null){
          path.push(node.val)
          result.push(path.join('->'))
          return;
      }
      path.push(node.val)
      if(node.left){
          dfs(node.left)
          path.pop()
      }
      if(node.right){
          dfs(node.right)
          path.pop()
      }
  }
  dfs(root)
  return result
};