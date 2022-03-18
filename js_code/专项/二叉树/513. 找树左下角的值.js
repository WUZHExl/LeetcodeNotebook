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
 * @return {number}
 */

// 使用层序遍历，记录每层第一个节点的值
 var findBottomLeftValue = function(root) {

  if(!root) return null
  let q=[root]
  let ans=0

  while(q.length){
      let levelNum=q.length
      for(let i=0;i<levelNum;i++){
          let node=q.shift()
          if(i==0) ans=node.val
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans

};


// 递归
var findBottomLeftValue = function(root) {

  let maxpath=0,resNode=null//maxpath表示高度

  const dfs=(node,curpath)=>{

      if(!node.left&&!node.right){
          if(curpath>maxpath){
              maxpath=curpath
              resNode=node.val
          }
      }
      if(node.left){
          dfs(node.left,curpath+1)
      }
      node.right&&dfs(node.right,curpath+1)
  }
  dfs(root,1)
  return resNode

};