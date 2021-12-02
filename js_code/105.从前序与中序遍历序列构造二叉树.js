/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
   
    let n=preorder.length;
    let mp=new Map();
    for (let i=0; i<n;i++){
      mp.set(inorder[i],i)//记录每个数在中序中出现的位置
    }

    //四个参数分别表示以这个节点为根节点的树的前序，中序结果在数组中的位置
    const helper=(preorder_left,preorder_right,inorder_left,inorder_right)=>{
      if(preorder_left>preorder_right) return null;

      //前序的第一个节点就是根节点
      let preorder_root=preorder_left
      //在中序遍历中找到根节点
      let inorder_root=mp.get(preorder[preorder_root])
      //构造根节点
      let root=new TreeNode(preorder[preorder_root])

      //左子树节点数目
      let len_left=inorder_root-inorder_left;
      //递归构造左子树
      root.left=helper(preorder_left+1,preorder_left+len_left,inorder_left,inorder_root-1)
      //递归构造右子树
      root.right=helper(preorder_left+len_left+1,preorder_right,inorder_root+1,inorder_right)
      return root
    }

    return helper(0,n-1,0,n-1)
};
// @lc code=end

