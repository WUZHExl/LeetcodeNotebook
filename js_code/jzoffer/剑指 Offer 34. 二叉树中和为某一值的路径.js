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
 * @param {number} target
 * @return {number[][]}
 */
 var pathSum = function(root, target) {
   let ans=[],temp=[]
   const dfs=(root,target)=>{
     if(!root) return
     temp.push(root.val)
     target-=root.val

     //到达叶子节点且target===0
     if(root.left===null&&root.right===null&&target===0){
      ans.push(temp.slice())
     }

     dfs(root.left,target)
     dfs(root.right,target)

     temp.pop()

   }

   dfs(root,target)
   return ans

};