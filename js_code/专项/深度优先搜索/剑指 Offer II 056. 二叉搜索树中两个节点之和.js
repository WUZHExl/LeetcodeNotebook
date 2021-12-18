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
 * @param {number} k
 * @return {boolean}
 */

`给定一个二叉搜索树的 根节点 root 和一个整数 k , 
请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。`

 var findTarget = function(root, k) {

  let ans=[]
  const dfs=root=>{
      if(!root) return;
      dfs(root.left)
      ans.push(root.val)
      dfs(root.right)
  }
  dfs(root)

 let l=0,r=ans.length-1   
 while(l<r){
     if(ans[l]+ans[r]===k) return true
     else if(ans[l]+ans[r]<k) l++
     else r--
 } 
 return false

};

// 使用深度优先搜索方式，每遍历到一个元素就把当前值存入到哈希表中，外加判断即可
var findTarget = function(root, k) {
  let set = new Set();
  var diff = function (node) {
    if (node === null) {
      return false;
    }
    if (set.has(k - node.val)) {
      // 判断是否存在满足条件的值
      return true;
    }
    set.add(node.val); // 将节点值存入 set 中
    return diff(node.left) || diff(node.right); // 只要存在 true 即可  这里是或 不是且
  };
  return diff(root);
};

