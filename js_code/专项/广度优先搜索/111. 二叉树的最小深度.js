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
`

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。
`

//BFS
 var minDepth = function(root) {
  if(!root) return 0
  let q=[root]
  let ans=Infinity,level=1
  while(q.length){
      let levelNum=q.length
      while(levelNum--){
          let node=q.shift()
          if(node.left===null&&node.right===null){
              ans=Math.min(ans,level)
          }
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
      level++

  }
  return ans
};

//DFS
const minDepth = (root) => {
  if (root == null) {
      return 0;
  }
  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (left > 0 && right > 0) {
      return 1 + Math.min(left, right);
  } else if (left > 0) {
      return 1 + left;
  } else if (right > 0) {
      return 1 + right;
  } else {
      return 1;
  }
};
