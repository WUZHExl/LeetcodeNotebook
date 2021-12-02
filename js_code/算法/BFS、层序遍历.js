/*
BFS广度优先搜索，队列实现
在 Js 中没有专门的“队列”，都使用数组来实现。队列的常用操作：
入队：array.push(val)
出队：array.shift()
查看队首元素：array[0]
检查是否为空：!!array.length
*/ 

// 最简单的
// 剑指 Offer 32 - I. 从上到下打印二叉树.js
// 题目：从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
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


// // 剑指 Offer 32 - II. 从上到下打印二叉树II.js
// 题目：从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
var levelOrder = function(root) {
  if(!root) return []
  let ans=[],q=[root]
  let level=0 // 代表当前层数
  while(q.length){
      ans[level]=[]
      let levelNum = q.length; // 第level层的节点数量
      while(levelNum--){
        let node=q.shift()
        ans[level].push(node.val)
        node.left&&q.push(node.left)
        node.right&&q.push(node.right)
      }
      level++

  }
  return ans

};


// 剑指 Offer 32 - III. 从上到下打印二叉树III.js
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