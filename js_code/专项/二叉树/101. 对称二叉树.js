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
 var isSymmetric = function(root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false 
    let helper=(left,right)=>{
       //2. 确定终止条件 空的情况  
      if(!left&&!right) return true; //左右子树都不存在
      else if(!left||!right) return false;//左右子树之一不存在
      else if(left.val!==right.val) return false;
      //3. 确定单层递归逻辑
      let outSide=helper(left.left,right.right)
      let inSide=helper(left.right,right.left)
      return inSide&&outSide
    };
    if(!root) return true;
    return helper(root.left,root.right);
  };


  var isSymmetric = function(root) {
    //迭代方法判断是否是对称二叉树
    //首先判断root是否为空
    if(root===null){
        return true;
    }
    let queue=[];
    queue.push(root.left);
    queue.push(root.right);
    while(queue.length){
        let leftNode=queue.shift();//左节点
        let rightNode=queue.shift();//右节点
        if(leftNode===null&&rightNode===null){
            continue;
        }
        if(leftNode===null||rightNode===null||leftNode.val!==rightNode.val){
            return false;
        }
        queue.push(leftNode.left);//左节点左孩子入队
        queue.push(rightNode.right);//右节点右孩子入队
        queue.push(leftNode.right);//左节点右孩子入队
        queue.push(rightNode.left);//右节点左孩子入队
    }
    return true;
  };