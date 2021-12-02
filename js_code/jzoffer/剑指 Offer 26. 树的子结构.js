/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {

  //判断树A中以nA为根节点的子树是否包含树B
  const hasSubStructure=(A,B)=>{
      if(!B) return true //递归结束条件1：A的一个节点B的对应位置没有,可以认为是子结构
      //递归结束条件2：B的一个节点A的对应位置没有 / 
      //递归结束条件3：A,B对应位置节点值不同，此时必然不可能是子结构
      if(!A||A.val!==B.val) return false
      return hasSubStructure(A.left,B.left)&&hasSubStructure(A.right,B.right)
  }

  if(!A||!B) return false
  return hasSubStructure(A,B)||isSubStructure(A.left,B)||isSubStructure(A.right,B)

};