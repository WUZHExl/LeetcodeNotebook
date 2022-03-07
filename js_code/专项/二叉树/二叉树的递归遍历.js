/*
* 
* @param root TreeNode类 
* @return int整型一维数组
*/
//前序
function preorderTraversal( root ) {
   let ans=[]
   const dfs=root=>{
       if(!root) return;
       ans.push(root.val)//do something
       dfs(root.left)
       dfs(root.right)
   }
   dfs(root)
   return ans
   // write code here
}

//中序
function inorderTraversal( root ) {
  // write code here
     let ans=[]
     const dfs=root=>{
         if(!root) return;
         dfs(root.left)
         ans.push(root.val)
         dfs(root.right)
     }
     dfs(root)
     return ans
}

//后序
function postorderTraversal( root ) {
  // write code here
   let ans=[]
   const dfs=root=>{
       if(!root) return;
       dfs(root.left)
       dfs(root.right)
       ans.push(root.val)
   }
   dfs(root)
   return ans
}