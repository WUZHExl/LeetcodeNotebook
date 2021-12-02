/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    

  const helper=(left,right)=>{
      if(!left&&!right) return true
      if(!left||!right) return false
      if(left.val!==right.val) return false
      else return helper(left.left,right.right)&&helper(left.right,right.left)
  }

  return root?helper(root.left,root.right):true

};