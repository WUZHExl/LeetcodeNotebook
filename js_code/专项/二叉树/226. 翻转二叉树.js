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

//  给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 var invertTree = function(root) {
  if(!root){                   //递归出口
    return null;
  }
  const l=invertTree(root.left);//递归子问题
  const r=invertTree(root.right);
  root.left=r;                  
  root.right=l;
  return root;
};


//层序遍历
var invertTree = function(root) {
  //我们先定义节点交换函数
  const invertNode=function(root,left,right){
      let temp=left;
      left=right;
      right=temp;
      root.left=left;
      root.right=right;
  }
  //使用层序遍历
  let queue=[];
  if(root===null){
      return root;
  } 
  queue.push(root);
  while(queue.length){
      let length=queue.length;
      while(length--){
          let node=queue.shift();
          //节点处理逻辑
          invertNode(node,node.left,node.right);
          node.left&&queue.push(node.left);
          node.right&&queue.push(node.right);
      }
  }
  return root;
};
