/**
 * @param {number[]} postorder
 * @return {boolean}
 */


/*
输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。
如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。


后序遍历定义： [ 左子树 | 右子树 | 根节点 ] ，即遍历顺序为 “左、右、根” 。
二叉搜索树定义： 
左子树中所有节点的值 << 根节点的值；右子树中所有节点的值 >> 根节点的值；其左、右子树也分别为二叉搜索树。

在数组中搜索第一个大于根节点的值，划分左右子树
*/



 var verifyPostorder = function(postorder) {


      const helper=(i,j) => {
        if(i>=j) return true;
        let temp=i;
        while(postorder[temp]<postorder[j]) temp+=1
        let m=temp
        while(postorder[temp2]>postorder[j]) temp+=1
        return temp===j && helper(i,m-1) && helper(m,j-1)
      }

      return helper(0,postorder.length-1)

};