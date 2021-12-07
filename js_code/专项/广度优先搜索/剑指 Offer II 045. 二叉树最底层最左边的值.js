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
//  使用二叉树的层序遍历。在层序遍历中，判断元素是否是当前层数的第一个，如果是，就更新res
 var findBottomLeftValue = function(root) {
  let q=[root]
  let ans=0
  while(q.length){

      let levelNum=q.length
      for(let i=0;i<levelNum;i++){
          let node=q.shift()
          // 如果是当前层数第一个元素，则更新res
          if(i===0){
              ans=node.val
          }
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return ans
};


var findBottomLeftValue = function(root) {
    let ans = -1
    let dep = -1
    let dfs = (root,depth)=>{
      if(root == null) return ;
      dfs(root.left,depth +1)
      if(depth > dep){
        ans = root.val
        dep = depth
      }
      dfs(root.right,depth + 1)
    }
    dfs(root,0)
    return ans
  };
  
