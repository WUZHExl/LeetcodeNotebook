/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {

    const buildTree=(arr,l,r) => {
      if(l>r) return null
      let maxValue=-1
      let maxIndex=-1
      for(let i=l;i<=r;i++){
        if(arr[i]>maxValue){
          maxValue = arr[i]
          maxIndex = i
        }
      }
      let root = new TreeNode(maxValue)
      root.left =buildTree(arr,l,maxIndex-1)
      root.right =buildTree(arr,maxIndex+1,r)
      return root;
    }


    let root=buildTree(nums,0,nums.length-1)
    return root

};