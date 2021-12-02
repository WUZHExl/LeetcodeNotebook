/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 给定一棵二叉搜索树，请找出其中第k大的节点。
// 二叉搜索树的中序遍历是递增序列
// 所以求第k大的节点，就是“此树的中序遍历倒序的第 k 个节点”


// 普通解法
var kthLargest = function(root, k) {

    let ans=[]
    const dfs=root=>{
        if(!root) return;
        ans.push(root.val)
        if(root.left) dfs(root.left)
        if(root.right) dfs(root.right)
    }
    dfs(root)
    return ans.sort((a,b)=>b-a)[k-1]

};

// 利用二叉搜索树中序遍历递增的性质
// 中序遍历的倒序 为 “右、根、左” 顺序,
var kthLargest = function(root, k) {

    let ans,k=k
    const dfs=(root)=>{
        if(!root) return;
        dfs(root.right)
        if(k===0) return;
        if(k--===0) ans=root.val
        dfs(root.left)
    }
    dfs(root)
    return ans

};