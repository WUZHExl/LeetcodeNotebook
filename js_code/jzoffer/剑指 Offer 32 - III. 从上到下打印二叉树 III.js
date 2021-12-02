/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// 题目：请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，
// 第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 var levelOrder = function(root) {
  if(!root) return [];
  let q=[root],ans=[]
  let level =0
  while(q.length){
    ans[level] =[]
    let levellength=q.length
    while(levellength--){
      let node=q.shift()
      ans[level].push(node.val)
      if(node.left) q.push(node.left)
      if(node.right) q.push(node.right)
    }
    level++
  }
  for(let i=0;i<level;i++){
    if((i+1)%2==0){
      ans[i].reverse()
    }
  }
  return ans
};