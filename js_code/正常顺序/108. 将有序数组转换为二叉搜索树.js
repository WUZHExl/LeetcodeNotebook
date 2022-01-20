/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
`
给你一个整数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
`

 var sortedArrayToBST = function(nums) {

  const dfs=(left,right) => {
    if(left>right) return null;

    let mid=left +Math.floor((right-left)/2)

    let root=new TreeNode(nums[mid])
    root.left=dfs(left,mid-1)
    root.right=dfs(mid+1,right)
    return root
  }

  return dfs(0,nums.length-1)
};