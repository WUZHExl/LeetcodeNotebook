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
 var CBTInserter = function(root) {
  this.root = root;
  // 初始化队列，此时只有一个根节点
  this.queue = [root];
};

/** 
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    let newNode=new TreeNode(v)
    while (this.queue[0].left && this.queue[0].right) {
    // 如果队首节点（当前节点）既有左子节点又有右子节点，那么就代表新插入的节点不会是此节点的子节点
    this.queue.push(this.queue[0].left);
    this.queue.push(this.queue[0].right);
    // 那么将它的左右节点加入队列之后此节点就没有存在的必要了
    this.queue.shift();
  }

  this.queue[0].left===null?this.queue[0].left=newNode:this.queue[0].right=newNode
  return this.queue[0].val

};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root
};
`完全二叉树是每一层（除最后一层外）都是完全填充（即，节点数达到最大，第 n 层有 2n-1 个节点）的，并且所有的节点都尽可能地集中在左侧。

设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：

CBTInserter(TreeNode root) 使用根节点为 root 的给定树初始化该数据结构；
CBTInserter.insert(int v)  向树中插入一个新节点，节点类型为 TreeNode，值为 v 。使树保持完全二叉树的状态，并返回插入的新节点的父节点的值；
CBTInserter.get_root() 将返回树的根节点。
`
/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(v)
 * var param_2 = obj.get_root()
 */