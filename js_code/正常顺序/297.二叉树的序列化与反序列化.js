/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let str="";
    const dfs=(root,str)=>{
      if(!root) str+='None,';
      else{
        str+=root.val+''+","
        str=dfs(root.left,str)
        str=dfs(root.right,str)
      }
      return str;
    }
    return dfs(root,str)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let dataList=data.split(',')
    return rdeserialize(dataList)
};

const rdeserialize=(dataList) =>{
    if(dataList[0]==="None") {
      dataList.shift();
      return null
    }
    const root=new TreeNode(parseInt(dataList[0]))
    dataList.shift();
    root.left=rdeserialize(dataList)
    root.right=rdeserialize(dataList)

    return root
} 

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

