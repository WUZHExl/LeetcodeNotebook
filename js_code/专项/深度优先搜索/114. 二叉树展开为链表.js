/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

`
先用两个变量把原先的左右子树保存起来
将左子树作为右子树(对照下图中第1个树变成第2个树，原来2的左子树3变成了2的右子树3)
将原先的右子树接到当前右子树的末端（看下图第3棵树，5要接到4的下面）
`


 var flatten = function (root) {
  /*
  函数的定义：给 flatten 函数输入一个节点 root，那么以 root 为根的二叉树就会被拉平为一条链表。
   */
  // base case
  if (root == null) return;

  flatten(root.left);
  flatten(root.right);

  // 1、左右子树已经被拉平成一条链表
  // 先用两个变量把原先的左右子树保存起来
  let left = root.left;
  let right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  while (root.right != null) {
    root = root.right;
  }
  root.right = right;
};



`
右子树转成的单链表，只要获取它的头结点，等左子树生成的链表生成好，接到它的尾节点
左子树生成的单链表，处理稍微复杂一点
要获取它的头结点，它要接到根节点的right
要获取它的尾节点，通过一直找右节点，找到尾节点，供连接
左子树生成的链表两端都接好后，root.left 要置为 null，不然 root 还拖着个左子树
`

const flatten = (root) => {
  const helper = (root) => {       // 将当前子树转成一个单链表
    if (root == null) return null; // 遍历到null节点 返回null节点
    if (root.right) {              // 先生成右子树的单链表
      helper(root.right);
    }
    if (root.left) {               // 如果有左子树，生成单链表然后搬运过去
      const leftFirst = helper(root.left); // 生成单链表，并获取头结点
      let leftLast = leftFirst;    // leftEnd是单链表的尾节点
      while (leftLast.right) {     // 一直找右节点，获取到单链表的尾节点
        leftLast = leftLast.right;
      }
      leftLast.right = root.right; // 尾节点后面接左子树展平后的单链表
      root.right = leftFirst;      // 根节点的right改成leftFirst
      root.left = null;            // root.left置为null
    }
    return root; // 返回出当前子树转成的单链表
  };
  helper(root);  // 原地修改，不用返回
};


var flatten = function(root) {
  while(root){
    let p=root.left;
    if(p){
      while(p.right) p=p.right;
      p.right=root.right;
      root.right=root.left;
      root.left=null
    }
    root=root.right;
  }
  
};
