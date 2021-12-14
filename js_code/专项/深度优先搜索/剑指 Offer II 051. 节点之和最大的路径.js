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

//  一个子树内部的最大路径和 = 左子树提供的最大路径和 + 根节点值 + 右子树提供的最大路径和

 var maxPathSum = function(root) {

    let max=Number.MIN_SAFE_INTEGER; // 最大路径和

    const dfs=root=>{
      if(!root) return 0;

      let left =dfs(root.left) //左子树提供的最大路径和
      let right=dfs(root.right) //右子树提供的最大路径和

      let temp=root.val+left+right   // 当前子树内部的最大路径和
      max=Math.max(temp,max) 

      let outmaxSum=root.val+Math.max(left,right) // 当前子树对外提供的最大和

      return outmaxSum<0?0:outmaxSum
    } 

    dfs(root)
    return max
};