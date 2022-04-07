/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */


//对二叉搜索树来说，找公共祖先节点，只需要找到节点值在[p,q]之间的就可以了


//递归
 var lowestCommonAncestor = function(root, p, q) {
    

  const dfs=root=>{
      if(root.val>p.val&&root.val>q.val) return dfs(root.left)
      if(root.val<p.val&&root.val<q.val) return dfs(root.right)
      return root

  }

  return dfs(root)
};

//迭代法
var lowestCommonAncestor = function(root, p, q) {
  // 使用迭代的方法
  while(root) {
      if(root.val>p.val&&root.val>q.val) {
          root = root.left;
      }else if(root.val<p.val&&root.val<q.val) {
          root = root.right;
      }else {
          return root;
      }
      
  }
  return null;
};


//层序遍历
var lowestCommonAncestor = function(root, p, q) {
    
  if(!root) return null
  if(p.val>q.val) [p,q]=[q,p]
  let qunue=[root]
  while(qunue.length){
      let levelNum=qunue.length
      while(levelNum--){
          let node=qunue.shift()
          if(node.val>=p.val&&node.val<=q.val) return node 
          node.left&&qunue.push(node.left)
          node.right&&qunue.push(node.right)
      }
  }
  return null

};