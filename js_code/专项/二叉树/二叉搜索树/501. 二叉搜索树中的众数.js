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
 * @return {number[]}
 */
`
给你一个含重复值的二叉搜索树（BST）的根节点 root ，找出并返回 BST 中的所有 众数（即，出现频率最高的元素）。

如果树中有不止一个众数，可以按 任意顺序 返回。

假定 BST 满足如下定义：

结点左子树中所含节点的值 小于等于 当前节点的值
结点右子树中所含节点的值 大于等于 当前节点的值
左子树和右子树都是二叉搜索树
`


`
把节点按顺序保存到数组中
然后，按出现频率保存到map中
`

 var findMode = function(root) {

  let arr=[],map=new Map()
  let InOrder=root=>{
      root.left&&InOrder(root.left)
      arr.push(root.val)
      root.right&&InOrder(root.right)
  }
  InOrder(root)
  for(let n of arr) map.set(n,map.has(n)?map.get(n)+1:1)
  //console.log(map)

  let ans=Array.from(map).sort((a,b)=>b[1]-a[1])
  let res=[ans[0][0]]
  for(let i=1;i<ans.length;i++){
      if(ans[i][1]===ans[0][1]) res.push(ans[i][0])
  }
  return res
  
};


//不使用额外空间，利用二叉树性质，中序遍历(有序)：
var findMode = function(root) {
  // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
  let count = 0,maxCount = 1;
  let pre = root,res = [];
  // 1.确定递归函数及函数参数
  const travelTree = function(cur) {
      // 2. 确定递归终止条件
      if(cur === null) {
          return ;
      }
      travelTree(cur.left);
      // 3. 单层递归逻辑
      if(pre.val === cur.val) {
          count++;
      }else {
          count = 1;
      }
      pre = cur;
      if(count === maxCount) {
          res.push(cur.val);
      }
      if(count > maxCount) {
          res = [];
          maxCount = count;
          res.push(cur.val);
      }
      travelTree(cur.right);
  }
  travelTree(root);
  return res;
};