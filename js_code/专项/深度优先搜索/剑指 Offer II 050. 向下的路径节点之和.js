// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。


`rootSum(p,val) 表示以节点 p 为起点向下且满足路径总和为 val 的路径数目。
我们对二叉树上每个节点 p 求出 rootSum(p,targetSum)，
然后对这些路径数目求和即为返回结果。
`
//返回当前节点为起点路径和为targetSum的路径数目
const rootSum = (root, targetSum) => {
  let ret = 0;

  if (root == null) {
      return 0;
  }
  const val = root.val;
  if (val === targetSum) {
      ret++;
  } 

  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
}



var pathSum = function(root, targetSum) {
  if (root == null) {
      return 0;
  }
  
  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

