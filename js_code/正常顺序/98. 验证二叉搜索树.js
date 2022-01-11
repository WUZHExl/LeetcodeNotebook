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
 * @return {boolean}
 */


// 递归
 var isValidBST = function(root) {


    const helper=(root,lower,upper) => {
      if(!root) return true
      if(root.val<=lower||root.val>=upper) return false

      return helper(root.left,lower,root.val)&&
             helper(root.right,root.val,upper)
    }

    return helper(root,-Infinity,Infinity)

};


// 中序遍历
`
二叉搜索树「中序遍历」得到的值构成的序列一定是升序的，
这启示我们在中序遍历的时候实时检查当前节点的值是否大于前一个中序遍历到的节点的值即可

`

var isValidBST = function(root) {

  let ans=[]
  const InOrder=root=>{
    if(root.left)InOrder(root.left)
    ans.push(root.val)
    if(root.right)InOrder(root.right)
  }
  InOrder(root)
  for(let i=0; i<ans.length-1; i++) {
    if(ans[i]>=ans[i+1]) return false
  }
  return true

};

