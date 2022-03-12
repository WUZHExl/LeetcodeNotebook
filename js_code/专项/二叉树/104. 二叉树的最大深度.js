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
`给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。`

//bfs
 var maxDepth = function(root) {
  if(!root) return 0
  let q=[root]
  let ans=0
  while(q.length){
      ans++
      let levelNum=q.length
      while(levelNum--){
          let node=q.shift()
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans
};
//dfs
var maxdepth = function(root) {
  //使用递归的方法 递归三部曲
  //1. 确定递归函数的参数和返回值
  const getdepth=function(node){
  //2. 确定终止条件
      if(node===null){
          return 0;
      }
  //3. 确定单层逻辑
      let leftdepth=getdepth(node.left);
      let rightdepth=getdepth(node.right);
      let depth=1+math.max(leftdepth,rightdepth);
      return depth;
  }
  return getdepth(root);
};


// 559. N 叉树的最大深度
`给定一个 N 叉树，找到其最大深度。
最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。
`
var maxDepth = function(root) {
  if(!root) return 0
  let q=[root]
  let ans=0
  while(q.length){
      ans++
      let levelNum=q.length
      while(levelNum--){
          let node=q.shift()
          for(let children of node.children){
              children&&q.push(children)
          }
      }
  }
  return ans
};


var maxDepth = function(root) {
  if(!root) return 0
  let depth = 0
  for(let node of root.children) {
      depth = Math.max(depth, maxDepth(node))
  }
  return depth + 1
}