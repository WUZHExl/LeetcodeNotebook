/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
`
 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
 struct Node {
   int val;
   Node *left;
   Node *right;
   Node *next;
 }
 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 初始状态下，所有 next 指针都被设置为 NULL。
`
/**
 * @param {Node} root
 * @return {Node}
 */

//本题依然是层序遍历，只不过在单层遍历的时候记录一下本层的头部节点，然后在遍历的时候让前一个节点指向本节点就可以了
 var connect = function(root) {
  if(!root) return root
  let q=[root]
  while(q.length){
      let levelNum=q.length
      for(let i=0;i<levelNum;i++){
          let node=q.shift()
          if(i<levelNum-1) node.next=q[0]
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
      }
  }
  return root
};