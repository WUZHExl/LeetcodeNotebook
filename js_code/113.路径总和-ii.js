/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

  let ans=[],temp=[],num=0
  function dfs(root, targetSum){//返回当前节点为起点路径和为targetSum的路径数目
    if(!root) return ;
    temp.push(root.val)
    targetSum-=root.val
    if(root.left===null&&root.right===null&&targetSum===0)
    {
      ans[num]=[]//ans[num]=new Array
      for(i of temp) ans[num].push(i)
      num++
    }
    dfs(root.left, targetSum)
    dfs(root.right, targetSum)
    temp.pop()
  }

  dfs(root,targetSum)
  return ans;
};
// @lc code=end

