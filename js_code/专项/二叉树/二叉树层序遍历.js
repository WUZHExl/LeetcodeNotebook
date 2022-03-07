/**
  * 
  * @param root TreeNode类 
  * @return int整型二维数组
  */

//给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）
 function levelOrder( root ) {
  // write code here
  if(!root) return []
  let res=[]
  let q=[root],level=0
  while(q.length){
      res[level]=[]
      let levelNum=q.length  // 第level层的节点数量
      for(let i=0;i<levelNum;i++){
          let node=q.shift()
          res[level].push(node.val)
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
      level++
  }
  return res
}