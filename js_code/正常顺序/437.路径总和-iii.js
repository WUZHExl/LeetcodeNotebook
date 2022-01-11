/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
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
 * @return {number}
 */

// 自下而上？
var pathSum = function(root, targetSum) {
    
    function dfs(root, targetSum){//返回当前节点为起点路径和为targetSum的路径数目
      if(!root) return 0;
      let count=root.val===targetSum?1:0
      count+=dfs(root.left, targetSum-root.val)
      count+=dfs(root.right, targetSum-root.val)
      return count
    }

    return root?dfs(root, targetSum)+
    pathSum(root.right,targetSum)+pathSum(root.left,targetSum):0
};

// let count=0;
// var pathSum = function(root, targetSum){

//   function dfs(root, targetSum)
//   {
//     if(!root) return ;
//     targetSum-=root.val
//     if(targetSum===0) count++
//     dfs(root.left, targetSum)
//     dfs(root.right, targetSum)
//   }

//   if(!root) return 0;
//   dfs(root,targetSum)
//   pathSum(root.left, targetSum)
//   pathSum(root.right,targetSum)
//   return count
// }


// @lc code=end

