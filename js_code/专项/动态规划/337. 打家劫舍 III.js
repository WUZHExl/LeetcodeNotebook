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
 * @return {number}
 */

`
小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。
除了 root 之外，每栋房子有且只有一个“父“房子与之相连。
一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 
如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。
给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。
`
 var rob = function(root) {


    const f=new Map()//表示选择o节点的情况下，o节点的子树上被选择的节点的最大权值和
    const g =new Map()//表示不选择o节点的情况下,o节点的子树上被选择的节点的最大权值和

    const dfs=(node)=>{

      if(node=== null) return;
      dfs(node.left)
      dfs(node.right)

      f.set(node,node.val+(g.get(node.left)||0)+(g.get(node.right)||0))

      g.set(node,Math.max(f.get(node.left)||0,g.get(node.left)||0)
      +Math.max(f.get(node.right)||0,g.get(node.right)||0))

    }

    dfs(root)
    return Math.max(f.get(root)||0,g.get(root)||0)

};