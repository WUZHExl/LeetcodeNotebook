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
 */

`方法一：扁平化
我们可以直接对二叉搜索树做一次完全的递归遍历，
获取中序遍历的全部结果并保存在数组中。
随后，我们利用得到的数组本身来实现迭代器。`

 var BSTIterator = function(root) {
  this.id=0
  this.arr=[]
  this.inOrder(root, this.arr)
};

/**
* @return {number}
*/
BSTIterator.prototype.next = function() {
  return this.arr[this.id++]
};

/**
* @return {boolean}
*/
BSTIterator.prototype.hasNext = function() {
  return this.id<this.arr.length
};

BSTIterator.prototype.inOrder=function(root,arr){
  if(!root) return;
  this.inOrder(root.left,arr)
  arr.push(root.val)
  this.inOrder(root.right,arr)
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/