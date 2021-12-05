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
 * @return {number[]}
 */
 var largestValues = function(root) {
      if(!root) return [];
      let q=[root]        //生成队列
      let ans=[]          //保存答案的数组
      let level=0 // 代表当前层数
      while(q.length){
        
        let levelNum = q.length; // 第level层的节点数量
        let max=-Infinity
        while(levelNum--){
          let node=q.shift()     //队头元素出队
          max=Math.max(max,node.val)
          node.left&&q.push(node.left)
          node.right&&q.push(node.right)
        }
        ans.push(max)
        
      }
      return ans
};