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

//BFS
 var countNodes = function(root) {

  if(!root) return 0
  let ans=0
  let q=[root]
  while(q.length){
      let levelNum=q.length;
      while(levelNum--){
          let node=q.shift()
          ans++
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans
};

//根据树高来计算完全二叉树的节点数
var countNodes = function (root) {
  let h = 0;
  // 计算树的高度
  while (root) {
    root = root.left;
    h++;
  }
  // 节点总数就是 2^h - 1
  return Math.pow(2, h) - 1;
};


//递归
var countNodes = function (root) {
    if(!root) return 0;
    let left=countNodes(root.left)
    let right=countNodes(root.right)

    return left+right+1
};

