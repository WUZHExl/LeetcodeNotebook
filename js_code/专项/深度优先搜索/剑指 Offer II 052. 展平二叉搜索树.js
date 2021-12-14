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

//  中序遍历之后生成新的树
`
先对输入的二叉搜索树执行中序遍历，将结果保存到一个列表中；
然后根据列表中的节点值，创建等价的只含有右节点的二叉搜索树，其过程等价于根据节点值创建一个链表。
`
 var increasingBST = function(root) {
    
  let res=[]
  const dfs=(root,res)=>{
      if(!root) return;
      dfs(root.left,res)
      res.push(root.val)
      dfs(root.right,res)
  }
  dfs(root,res)

  let dummyNode=new TreeNode(-1)      //新建树
  let currNode=dummyNode
  for(let v of res){
      currNode.right=new TreeNode(v)
      currNode=currNode.right
  }
  return dummyNode.right
};