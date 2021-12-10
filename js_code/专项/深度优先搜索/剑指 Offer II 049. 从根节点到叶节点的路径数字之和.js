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
`从根节点开始，遍历每个节点，如果遇到叶子节点，
则将叶子节点对应的数字加到数字之和。如果当前节点不是叶子节点，
则计算其子节点对应的数字，然后对子节点递归遍历。`

 var sumNumbers = function(root) {

    const dfs=(root,preSum)=>{
      if(!root) return 0
      let sum =preSum*10+root.val
      if(root.left===null&&root.right===null){
        return sum
      }
      return dfs(root.left,sum)+dfs(root.right,sum)
    }

    return dfs(root,0)
};