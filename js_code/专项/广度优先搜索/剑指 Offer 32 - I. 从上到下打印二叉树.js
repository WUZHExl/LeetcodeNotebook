/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 题目：从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
/*
BFS广度优先搜索，队列实现
在 Js 中没有专门的“队列”，都使用数组来实现。队列的常用操作：
入队：array.push(val)
出队：array.shift()
查看队首元素：array[0]
检查是否为空：!!array.length
*/ 

// 剑指 Offer 32 - I. 从上到下打印二叉树.js
 var levelOrder = function(root) {
  if(!root) return []
  let q=[root]  //生成队列
  let ans=[]   //保存答案的数组
  while(q.length){
      let node=q.shift()
      ans.push(node.val)
      node.left&&q.push(node.left) //左子树入队
      node.right&&q.push(node.right)//右子树入队
  }
  return ans
};