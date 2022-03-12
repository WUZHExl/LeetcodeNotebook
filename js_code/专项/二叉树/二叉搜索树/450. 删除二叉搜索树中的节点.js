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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {

  // const successor=(root)=>{
  //     if(root.right) root=root.right
  //     while(root.left) root=root.left
  //     return root
  // }
  // const predecessor=root=>{
  //     if(root.left) root=root.left
  //     while(root.right) root=root.right
  //     return root
  // }

  if(!root) return root;

  if(key>root.val) root.right=deleteNode(root.right,key)
  else if(key<root.val) root.left=deleteNode(root.left,key)
  else{                    // 当前节点就是要删除的节点
     if (!root.left)       // 情况1，欲删除节点无左子
          return root.right;
      else if (!root.right) // 情况2，欲删除节点无右子
          return root.left;
      else {                // 情况3，欲删除节点左右子都有 
          let cur = root.right; // 寻找欲删除节点右子树的最左节点
          while (cur.left) {
              cur = cur.left;
          }
          cur.left = root.left; // 将欲删除节点的左子树成为其右子树的最左节点的左子树
          root = root.right;    // 欲删除节点的右子顶替其位置，节点被删除
          // root.val=cur.val
          // 找到最小的顶替它之后还要删除这个最小的节点
          // root.right = deleteNode(root.right, cur.val);

          // delete root;
          // return root;
      }

  }
  return root

};