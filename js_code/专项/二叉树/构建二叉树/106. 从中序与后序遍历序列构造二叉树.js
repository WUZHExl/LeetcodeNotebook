/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

`
给定两个整数数组 inorder 和 postorder ，
其中 inorder 是二叉树的中序遍历， 
postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

以 后序数组的最后一个元素为切割点，先切中序数组，
根据中序数组，反过来在切后序数组。
一层一层切下去，每次后序数组最后一个元素就是节点元素。

中序：9 3 15 20 7
后序 9 15 7 20 3
`
 var buildTree = function(inorder, postorder) {
    if(!postorder.length) return null
    const rootVal=postorder.pop()
    let index=inorder.indexOf(rootVal)

    const root=new TreeNode(rootVal)

    root.left=buildTree(inorder.slice(0,index),postorder.slice(0,index))
    root.right=buildTree(inorder.slice(index+1),postorder.slice(index))
    return root
};

`
给定两个整数数组 preorder 和 inorder ，
其中 preorder 是二叉树的先序遍历，
 inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 前序和后序构建树

 前序 3,9,20,15,7
 中序 9,3,15,20,7
`

var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    const rootVal=preorder.shift()
    let index=inorder.indexOf(rootVal)

    const root=new TreeNode(rootVal)
    root.left=buildTree(preorder.slice(0,index),inorder.slice(0,index))
    root.right=buildTree(preorder.slice(index),inorder.slice(index+1))
    return root
};