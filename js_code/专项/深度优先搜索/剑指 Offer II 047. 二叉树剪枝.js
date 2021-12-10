// 给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

// 节点 node 的子树为 node 本身，以及所有 node 的后代。


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
 * @return {TreeNode}
 */

`
被剪除的子树应具备以下条件：
1.子树根节点值为0
2.左子树为空 / 左子树中所有节点值为0
3.右子树为空 / 右子树中所有节点值为0
当从叶子节点往上逆推，只需考虑当前节点的情况，优化以上条件为：
1.节点值为0
2.节点左右子树为空
`

// 后序遍历

 var pruneTree = function(root) {
     if(!root) return null //递归出口

     let left=pruneTree(root.left)  //子问题
     let right=pruneTree(root.right)

     if(!left&&!right&&root.val===0){
       return null;
     }

     return root;
};

